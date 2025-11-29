/* ultra-light WebGL gooey plane (single quad) */
import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function GooeyCursor() {
  const mesh = useRef()
  const { size } = useThree()

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_res: { value: [size.width, size.height] },
      u_mouse: { value: [0, 0] }
    }),
    [size]
  )

  useFrame(state => {
    uniforms.u_time.value = state.clock.elapsedTime
    uniforms.u_mouse.value = [state.mouse.x * size.width, -state.mouse.y * size.height]
  })

  return (
    <mesh ref={mesh} scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          void main(){
            gl_Position = vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform vec2 u_res;
          uniform vec2 u_mouse;
          uniform float u_time;
          void main(){
            vec2 uv = (gl_FragCoord.xy - 0.5*u_res)/min(u_res.x,u_res.y);
            vec2 m = (u_mouse - 0.5*u_res)/min(u_res.x,u_res.y);
            float d = length(uv - m);
            float ripple = sin(d*20. - u_time*4.)*exp(-d*3.)*0.15;
            float goo = 1. - smoothstep(0.2,0.22,d);
            vec3 color = vec3(0.05,0.9,1.)*goo;
            gl_FragColor = vec4(color+ripple,0.65);
          }
        `}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}