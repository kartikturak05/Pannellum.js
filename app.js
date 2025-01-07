src = 'floor.jpeg';


const mallone = document.getElementById('mallone');

mallone.addEventListener('click', () => {
  src = 'mall.webp';
  show(src);
})

const malltwo = document.getElementById('malltwo');

malltwo.addEventListener('click', () => {
  src = 'mall2.webp';
  show(src);
})

const mallthree = document.getElementById('mallthree');

mallthree.addEventListener('click', () => {
  src = 'mall3.webp';
  show(src);
})

const college = document.getElementById('college');

college.addEventListener('click', () => {
  src = 'college.webp';
  show(src);
})

const stadium = document.getElementById('stadium');

stadium.addEventListener('click', () => {
  src = 'stadium2.webp';
  show(src);
})




function show (srcimg){
  const viewer = pannellum.viewer('panorama', {
    default: {
      firstScene: 'scene1', // Initial scene
    },
    // scenes: {
    //   scene1: {
    //     type: 'equirectangular',
    //     panorama: 'floor.jpeg',
    //     // panorama: 'side.jpeg',
    //     autoLoad: true,
    //     hotSpots: [
    //       {
    //         pitch:  -39.36, // Vertical position of the hotspot
    //         yaw: 28.13, // Horizontal position of the hotspot
    //         type: 'scene', // Hotspot type (for a clickable point)
    //         text: 'Go Inside Bedroom', // Tooltip text
    //         clickHandlerFunc: () => viewer.loadScene('scene2'), // Load second scene
    //       },
    //     ],
    //   },
    scenes:{
      scene1: {
        // type: 'cubemap',
        // cubeMap: [
        //     'bed.jpeg',   // right face
        //      'wall.jpeg',  // left face
        //     'side.jpeg',  // top face
        //      'side.jpeg', // bottom face
        //     'side.jpeg',  // front face 
        //      'wall.jpeg',  // back face
        // ],

         type:'equirectangular',
        panorama: srcimg,
        autoLoad: true,
        hfov: 300,
        // hotSpots: [
        //   {
        //     pitch: -12,
        //     yaw: 160.65,
        //     type: 'scene',
        //     text: 'Go inside the Washroom',
        //     clickHandlerFunc: () => viewer.loadScene('scene3'), // Back to first scene
        //   },
        // ],
      },
      // scene3: {
      //   type: 'equirectangular',
      //   panorama: 'washroom.jpeg',
      //   autoLoad: true,
      //   hfov: 360,
      //   hotSpots: [
      //     {
      //       pitch: -12,
      //       yaw: 160.65,
      //       type: 'scene',
      //       text: 'Go inside the Bedroom',
      //       clickHandlerFunc: () => viewer.loadScene('scene2'), // Back to first scene
      //     },
      //   ],
      // },
    },
  });
}
