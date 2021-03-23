  
AFRAME.registerComponent('outline', {
        
        schema: {
             
                thickness: {type:'number', default: 0.003},
                color: {type:'color', default: 'black'}
  
        },
        
        init: function () {
          
                // Wait for model to load.
                this.el.addEventListener('model-loaded', () => {
            
                        // Grab the mesh / scene.
                        const obj = this.el.getObject3D('mesh');
            
                        // Go over the submeshes and modify materials we want.
                        obj.traverse(node => {
              
                                if (node.name.indexOf('great_white_shark_exp19') !== -1) {
                
                                        const s = obj.scale * this.data.thickness;

                                        obj.scale.set(s,s,s);
                        
                        console.log("MODEL  " + obj.scale);
            
                                        node.material.color.set(this.data.color);
                
                                        node.material.side = THREE.BackSide
                
              
                                }
            
                        });

           
                });
         
        }
      
});
