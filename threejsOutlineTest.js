
AFRAME.registerComponent('modify-materials', {
        init: function () {
          // Wait for model to load.
          this.el.addEventListener('model-loaded', () => {
            console.log("MODEL LOADED");
            
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

            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
              if (node.name.indexOf('great_white_shark_exp19') !== -1) {
                node.material= mat
              }
            });

          });
        }
      });
