const imageToCut = document.querySelector('.image');
const cutterArea = document.querySelector('.cutter-area');

const isInside = (object, area) => {};

Draggable.create('.stamp-cutter', {
  inertia: true,
  onClick: function () {
    console.log('clicked');

    const cutterRect = cutterArea.getBoundingClientRect();

    const cutterX = cutterRect.x;
    const cutterY = cutterRect.y;

    console.log(`X:${cutterX} \n Y:${cutterY}`);
  },
  onDragEnd: function () {
    console.log('drag ended');
  },
});
