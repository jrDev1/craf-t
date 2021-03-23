//create a cube
const mat = new THREE.MeshLambertMaterial({
    color:’black’, 
    side:THREE.BackSide 
})
mat.onBeforeCompile = (shader) => {
    const token = ‘#include <begin_vertex>’
    const customTransform = `
        vec3 transformed = position + objectNormal*0.02;
    `
    shader.vertexShader = 
        shader.vertexShader.replace(token,customTransform)
}

obj = new THREE.Group()
const c1 = new THREE.Mesh(
    new THREE.TorusKnotBufferGeometry(0.6,0.1),
    mat
)
const s = 1.03
c1.scale.set(s,s,s)
obj.add(c1)
obj.add(new THREE.Mesh(
   new THREE.TorusKnotBufferGeometry(0.6,0.1),
   new THREE.MeshPhongMaterial({
       color:’yellow’, 
       side: THREE.FrontSide
   })
))

