const imageToCut = document.querySelector('.image');

const cutterArea = document.querySelector('.cutter-area');

const isInside = (object, area) => {};

Draggable.create('.stamp-cutter', {
  inertia: true,
  onClick: function () {
    console.log('clicked');

    const cutterRect = cutterArea.getBoundingClientRect();

    let width = cutterRect.width;
    let height = cutterRect.height;

    const cutterX = cutterRect.x;
    const cutterY = cutterRect.y;

    const imageRect = imageToCut.getBoundingClientRect();

    const imageX = imageRect.x;
    const imageY = imageRect.y;

    imageToCut.style.width = `${width}px`;
    imageToCut.style.height = `${height}px`;

    imageToCut.style.width = `${width}px`;
    imageToCut.style.height = `${height}px`;

    imageToCut.style.left = `${cutterX}px`;
    imageToCut.style.top = `${cutterY}px`;

    imageToCut.style.backgroundPosition = `-${cutterX}px -${cutterY}px`;

    console.log(cutterX);
    console.log(`X:${cutterX} \n Y:${cutterY}`);
  },
  onDragEnd: function () {
    console.log('drag ended');
  },
});
