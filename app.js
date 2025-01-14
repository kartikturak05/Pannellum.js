src = 'floor.jpeg';


const mallone = document.getElementById('mallone');

mallone.addEventListener('click', () => {
  src = 'panoromaMall1.jpg';
  show(src);
})

const malltwo = document.getElementById('malltwo');

malltwo.addEventListener('click', () => {
  src = 'panoramicMall.webp';
  show(src);
})

const mallthree = document.getElementById('mallthree');

mallthree.addEventListener('click', () => {
  // src = 'panormaicImage2.jpg';
  src = 'panoramicImage6.jpg';
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


const image1 = document.getElementById('image1');

image1.addEventListener('click', () => {
  src = 'panoramicImage1.jpg';
  show(src);
})

const image2 = document.getElementById('image2');

image2.addEventListener('click', () => {
  src = 'panoramicImage2.jpg';
  show(src);
})

const image3 = document.getElementById('image3');

image3.addEventListener('click', () => {
  src = 'panoramicImage3.jpg';
  show(src);
})

const image4 = document.getElementById('image4');

image4.addEventListener('click', () => {
  src = 'panoramicImage10.jpg';
  show(src);
})

const image5 = document.getElementById('image5');

image5.addEventListener('click', () => {
  src = 'panoramicImage11.jpg';
  show(src);
})

const image6 = document.getElementById('image6');

image6.addEventListener('click', () => {
  src = 'PanoramicImage14.jpeg';
  show(src);
})

const image7 = document.getElementById('image7');

image7.addEventListener('click', () => {
  src = 'PanoramicImage13.jpeg';
  show(src);
})


const image8 = document.getElementById('image8');

image8.addEventListener('click', () => {
  src = 'PanoramicImage15.jpeg';
  show(src);
})

const image9 = document.getElementById('image9');

image9.addEventListener('click', () => {
  src = 'PanoramicImage16.jpeg';
  show(src);
})

const image10 = document.getElementById('image10');

image7.addEventListener('click', () => {
  src = 'PanoramicImage17.jpeg';
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
        // hfov: 300,
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
