/*TMODJS:{"version":1,"md5":"4913f0f8497f6fceb552612c78ea4400"}*/
define(['../template','../copyright'],function(template){return template('public/footer', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,time=$data.time,$escape=$utils.$escape,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div id="footer"> ';
if(time){
$out+=' <p class=\'time\'>';
$out+=$escape(time);
$out+='</p> ';
}
$out+=' ';
include('../copyright');
$out+=' </div>';
return new String($out);
});});