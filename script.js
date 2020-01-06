
navigator.requestMIDIAccess().then(onMIDISuccess,onMIDIFailure);
var midi = null;
var inputs = [];
var outputs = [];
var output = null;
var chs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var ch = 1;

function onMIDISuccess(m){
  midi = m;
  var it = midi.inputs.values();
  for(var o = it.next(); !o.done; o = it.next()){
    inputs.push(o.value);
  }
  var ot = midi.outputs.values();
  for(var o = ot.next(); !o.done; o = ot.next()){
    outputs.push(o.value);
  }
  
  output = outputs[0];
  outputs.forEach(function(element, index) {
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(element.name));
    option.setAttribute('value', index);
    document.getElementById('select-midi-output-device').appendChild(option);
  });
  document.getElementById('select-midi-output-device').onchange = function() {
    output = outputs[this.value];
  };
  
  for(var cnt=0;cnt < inputs.length;cnt++){
    inputs[cnt].onmidimessage = onMIDIEvent;
  }
}



chs.forEach(function(value, index) {
  var option = document.createElement('option');
  option.appendChild(document.createTextNode(value));
  option.setAttribute('value', index);
  document.getElementById('select-midi-output-ch').appendChild(option);
});
document.getElementById('select-midi-output-ch').onchange = function() {
  ch = chs[this.value];
};



function onMIDIEvent(e){
  if(e.data[2] != 0){ 
    // なにかをうけとったときの処理
    // console.log(e.data[2]);
    // console.log(e.data[1]);
  }
}

function onMIDIFailure(){
  console.log("munen!");
};

function sendCC(cc, val){
  // if(outputs.length > 0){
  //   outputs[0].send([0xB0, cc, val]);
  // }
  if(output){
    output.send([0xB0 + ch-1, cc, val]);
  }
}

//BTN
var pressedBtn = -1;
var pressedNoteBtn = -1;

$( "#btn11" ).mousedown(function() { pushNoteBtn(11,this) });
$( "#btn12" ).mousedown(function() { pushNoteBtn(12,this) });
$( "#btn13" ).mousedown(function() { pushNoteBtn(13,this) });
$( "#btn14" ).mousedown(function() { pushNoteBtn(14,this) });
$( "#btn15" ).mousedown(function() { pushNoteBtn(15,this) });
$( "#btn16" ).mousedown(function() { pushNoteBtn(16,this) });
$( "#btn17" ).mousedown(function() { pushNoteBtn(17,this) });
$( "#btn18" ).mousedown(function() { pushNoteBtn(18,this) });
$( "#btn19" ).mousedown(function() { pushNoteBtn(19,this) });
$( "#btn21" ).mousedown(function() { pushNoteBtn(21,this) });
$( "#btn22" ).mousedown(function() { pushNoteBtn(22,this) });
$( "#btn23" ).mousedown(function() { pushNoteBtn(23,this) });
$( "#btn24" ).mousedown(function() { pushNoteBtn(24,this) });
$( "#btn25" ).mousedown(function() { pushNoteBtn(25,this) });
$( "#btn26" ).mousedown(function() { pushNoteBtn(26,this) });
$( "#btn27" ).mousedown(function() { pushNoteBtn(27,this) });
$( "#btn28" ).mousedown(function() { pushNoteBtn(28,this) });
$( "#btn29" ).mousedown(function() { pushNoteBtn(29,this) });
$( "#btn31" ).mousedown(function() { pushNoteBtn(31,this) });
$( "#btn32" ).mousedown(function() { pushNoteBtn(32,this) });
$( "#btn33" ).mousedown(function() { pushNoteBtn(33,this) });
$( "#btn34" ).mousedown(function() { pushNoteBtn(34,this) });
$( "#btn35" ).mousedown(function() { pushNoteBtn(35,this) });
$( "#btn36" ).mousedown(function() { pushNoteBtn(36,this) });
$( "#btn37" ).mousedown(function() { pushNoteBtn(37,this) });
$( "#btn38" ).mousedown(function() { pushNoteBtn(38,this) });
$( "#btn39" ).mousedown(function() { pushNoteBtn(39,this) });
$( "#btn41" ).mousedown(function() { pushNoteBtn(41,this) });
$( "#btn42" ).mousedown(function() { pushNoteBtn(42,this) });
$( "#btn43" ).mousedown(function() { pushNoteBtn(43,this) });
$( "#btn44" ).mousedown(function() { pushNoteBtn(44,this) });
$( "#btn45" ).mousedown(function() { pushNoteBtn(45,this) });
$( "#btn46" ).mousedown(function() { pushNoteBtn(46,this) });
$( "#btn47" ).mousedown(function() { pushNoteBtn(47,this) });
$( "#btn48" ).mousedown(function() { pushNoteBtn(48,this) });
$( "#btn49" ).mousedown(function() { pushNoteBtn(49,this) });
$( "#btn51" ).mousedown(function() { pushNoteBtn(51,this) });
$( "#btn52" ).mousedown(function() { pushNoteBtn(52,this) });
$( "#btn53" ).mousedown(function() { pushNoteBtn(53,this) });
$( "#btn54" ).mousedown(function() { pushNoteBtn(54,this) });
$( "#btn55" ).mousedown(function() { pushNoteBtn(55,this) });
$( "#btn56" ).mousedown(function() { pushNoteBtn(56,this) });
$( "#btn57" ).mousedown(function() { pushNoteBtn(57,this) });
$( "#btn58" ).mousedown(function() { pushNoteBtn(58,this) });
$( "#btn59" ).mousedown(function() { pushNoteBtn(59,this) });
$( "#btn61" ).mousedown(function() { pushNoteBtn(61,this) });
$( "#btn62" ).mousedown(function() { pushNoteBtn(62,this) });
$( "#btn63" ).mousedown(function() { pushNoteBtn(63,this) });
$( "#btn64" ).mousedown(function() { pushNoteBtn(64,this) });
$( "#btn65" ).mousedown(function() { pushNoteBtn(65,this) });
$( "#btn66" ).mousedown(function() { pushNoteBtn(66,this) });
$( "#btn67" ).mousedown(function() { pushNoteBtn(67,this) });
$( "#btn68" ).mousedown(function() { pushNoteBtn(68,this) });
$( "#btn69" ).mousedown(function() { pushNoteBtn(69,this) });
$( "#btn71" ).mousedown(function() { pushNoteBtn(71,this) });
$( "#btn72" ).mousedown(function() { pushNoteBtn(72,this) });
$( "#btn73" ).mousedown(function() { pushNoteBtn(73,this) });
$( "#btn74" ).mousedown(function() { pushNoteBtn(74,this) });
$( "#btn75" ).mousedown(function() { pushNoteBtn(75,this) });
$( "#btn76" ).mousedown(function() { pushNoteBtn(76,this) });
$( "#btn77" ).mousedown(function() { pushNoteBtn(77,this) });
$( "#btn78" ).mousedown(function() { pushNoteBtn(78,this) });
$( "#btn79" ).mousedown(function() { pushNoteBtn(79,this) });
$( "#btn81" ).mousedown(function() { pushNoteBtn(81,this) });
$( "#btn82" ).mousedown(function() { pushNoteBtn(82,this) });
$( "#btn83" ).mousedown(function() { pushNoteBtn(83,this) });
$( "#btn84" ).mousedown(function() { pushNoteBtn(84,this) });
$( "#btn85" ).mousedown(function() { pushNoteBtn(85,this) });
$( "#btn86" ).mousedown(function() { pushNoteBtn(86,this) });
$( "#btn87" ).mousedown(function() { pushNoteBtn(87,this) });
$( "#btn88" ).mousedown(function() { pushNoteBtn(88,this) });
$( "#btn89" ).mousedown(function() { pushNoteBtn(89,this) });
$( "#btn91" ).mousedown(function() { pushNoteBtn(91,this) });
$( "#btn92" ).mousedown(function() { pushNoteBtn(92,this) });
$( "#btn93" ).mousedown(function() { pushNoteBtn(93,this) });
$( "#btn94" ).mousedown(function() { pushNoteBtn(94,this) });
$( "#btn95" ).mousedown(function() { pushNoteBtn(95,this) });
$( "#btn96" ).mousedown(function() { pushNoteBtn(96,this) });
$( "#btn97" ).mousedown(function() { pushNoteBtn(97,this) });
$( "#btn98" ).mousedown(function() { pushNoteBtn(98,this) });
$( "#btn99" ).mousedown(function() { pushNoteBtn(99,this) });

function pushBtn(cc,t){
  t.classList.add("active");
  sendCC(cc, 127);
  pressedBtn = cc;
}

$("body").mouseup(function() {
  releaseBtn()
});
$("body").mouseleave(function(){
  releaseBtn()
});


var pressedBtn = -1;


// offのときにccとnoteがごちゃごちゃ

document.onmouseup = function() {
  releaseBtn();
  releaseNote();
};


function pushNoteBtn(note,t){
  t.classList.add("active");
  outputs[0].send([0x90,note,0x7f]);
  // pressedBtn = note;
  pressedNoteBtn = note;
}

function releaseBtn(){
  if(pressedBtn != -1 ){
    sendCC(pressedBtn, 0);
    $(".btn").removeClass("active");
    pressedBtn = -1;
  }
}
function releaseNote(){
  if(pressedNoteBtn != -1 ){
    outputs[0].send([0x80,pressedNoteBtn,0x00]);
    document.querySelector(".active").classList.remove("active");
    pressedNoteBtn = -1;
  }
}
