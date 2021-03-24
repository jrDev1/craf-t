AFRAME.registerComponent('outline', {
        
        schema: {
             
                thickness: {type:'number', default: 1.015},
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
                
                                        const s = new THREE.Vector3( document.querySelector('#theModel').getAttribute('scale').x* this.data.thickness, document.querySelector('#theShark').getAttribute('scale').y* this.data.thickness,document.querySelector('#theShark').getAttribute('scale').z* this.data.thickness) ;

                                        obj.scale.set(s.x,s.y, s.z);
                        
                                        console.log("MODEL LOADED");
            
                                        node.material.color.set(this.data.color);
                
                                        node.material.side = THREE.BackSide
                
              
                                }
            
                        });

           
                });
         
        }
      
});
