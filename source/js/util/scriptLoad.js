module.exports = function (props, cb) {

  var script = window.document.createElement('script');

  script.setAttribute('id', props.id);
  script.setAttribute('async', true);
  script.src = props.src;
  script.onload = cb;

  document.body.appendChild(script);

  return script;

}