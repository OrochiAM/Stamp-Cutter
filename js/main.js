Draggable.create('.stamp-cutter', {
  bounds: document.body,
  inertia: true,
  onClick: function () {
    console.log('clicked');
  },
  onDragEnd: function () {
    console.log('drag ended');
  },
});
