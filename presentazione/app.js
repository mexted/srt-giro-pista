(()=>{var kf=Object.create;var sh=Object.defineProperty;var zf=Object.getOwnPropertyDescriptor;var Hf=Object.getOwnPropertyNames;var Vf=Object.getPrototypeOf,Gf=Object.prototype.hasOwnProperty;var Wf=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Xf=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Hf(t))!Gf.call(s,i)&&i!==e&&sh(s,i,{get:()=>t[i],enumerable:!(n=zf(t,i))||n.enumerable});return s};var $f=(s,t,e)=>(e=s!=null?kf(Vf(s)):{},Xf(t||!s||!s.__esModule?sh(e,"default",{value:s,enumerable:!0}):e,s));var Tf=Wf((wf,Ef)=>{var bf=function(){var s=function(M,w){var _=236,C=17,b=M,A=e[w],S=null,g=0,y=null,E=[],L={},k=function(N,F){g=b*4+17,S=function(P){for(var G=new Array(P),q=0;q<P;q+=1){G[q]=new Array(P);for(var Y=0;Y<P;Y+=1)G[q][Y]=null}return G}(g),H(0,0),H(g-7,0),H(0,g-7),V(),U(),tt(N,F),b>=7&&B(N),y==null&&(y=rt(b,A,E)),Q(y,F)},H=function(N,F){for(var P=-1;P<=7;P+=1)if(!(N+P<=-1||g<=N+P))for(var G=-1;G<=7;G+=1)F+G<=-1||g<=F+G||(0<=P&&P<=6&&(G==0||G==6)||0<=G&&G<=6&&(P==0||P==6)||2<=P&&P<=4&&2<=G&&G<=4?S[N+P][F+G]=!0:S[N+P][F+G]=!1)},O=function(){for(var N=0,F=0,P=0;P<8;P+=1){k(!0,P);var G=i.getLostPoint(L);(P==0||N>G)&&(N=G,F=P)}return F},U=function(){for(var N=8;N<g-8;N+=1)S[N][6]==null&&(S[N][6]=N%2==0);for(var F=8;F<g-8;F+=1)S[6][F]==null&&(S[6][F]=F%2==0)},V=function(){for(var N=i.getPatternPosition(b),F=0;F<N.length;F+=1)for(var P=0;P<N.length;P+=1){var G=N[F],q=N[P];if(S[G][q]==null)for(var Y=-2;Y<=2;Y+=1)for(var ot=-2;ot<=2;ot+=1)Y==-2||Y==2||ot==-2||ot==2||Y==0&&ot==0?S[G+Y][q+ot]=!0:S[G+Y][q+ot]=!1}},B=function(N){for(var F=i.getBCHTypeNumber(b),P=0;P<18;P+=1){var G=!N&&(F>>P&1)==1;S[Math.floor(P/3)][P%3+g-8-3]=G}for(var P=0;P<18;P+=1){var G=!N&&(F>>P&1)==1;S[P%3+g-8-3][Math.floor(P/3)]=G}},tt=function(N,F){for(var P=A<<3|F,G=i.getBCHTypeInfo(P),q=0;q<15;q+=1){var Y=!N&&(G>>q&1)==1;q<6?S[q][8]=Y:q<8?S[q+1][8]=Y:S[g-15+q][8]=Y}for(var q=0;q<15;q+=1){var Y=!N&&(G>>q&1)==1;q<8?S[8][g-q-1]=Y:q<9?S[8][15-q-1+1]=Y:S[8][15-q-1]=Y}S[g-8][8]=!N},Q=function(N,F){for(var P=-1,G=g-1,q=7,Y=0,ot=i.getMaskFunction(F),it=g-1;it>0;it-=2)for(it==6&&(it-=1);;){for(var Rt=0;Rt<2;Rt+=1)if(S[G][it-Rt]==null){var z=!1;Y<N.length&&(z=(N[Y]>>>q&1)==1);var mt=ot(G,it-Rt);mt&&(z=!z),S[G][it-Rt]=z,q-=1,q==-1&&(Y+=1,q=7)}if(G+=P,G<0||g<=G){G-=P,P=-P;break}}},st=function(N,F){for(var P=0,G=0,q=0,Y=new Array(F.length),ot=new Array(F.length),it=0;it<F.length;it+=1){var Rt=F[it].dataCount,z=F[it].totalCount-Rt;G=Math.max(G,Rt),q=Math.max(q,z),Y[it]=new Array(Rt);for(var mt=0;mt<Y[it].length;mt+=1)Y[it][mt]=255&N.getBuffer()[mt+P];P+=Rt;var pt=i.getErrorCorrectPolynomial(z),wt=o(Y[it],pt.getLength()-1),vt=wt.mod(pt);ot[it]=new Array(pt.getLength()-1);for(var mt=0;mt<ot[it].length;mt+=1){var kt=mt+vt.getLength()-ot[it].length;ot[it][mt]=kt>=0?vt.getAt(kt):0}}for(var dt=0,mt=0;mt<F.length;mt+=1)dt+=F[mt].totalCount;for(var I=new Array(dt),T=0,mt=0;mt<G;mt+=1)for(var it=0;it<F.length;it+=1)mt<Y[it].length&&(I[T]=Y[it][mt],T+=1);for(var mt=0;mt<q;mt+=1)for(var it=0;it<F.length;it+=1)mt<ot[it].length&&(I[T]=ot[it][mt],T+=1);return I},rt=function(N,F,P){for(var G=a.getRSBlocks(N,F),q=l(),Y=0;Y<P.length;Y+=1){var ot=P[Y];q.put(ot.getMode(),4),q.put(ot.getLength(),i.getLengthInBits(ot.getMode(),N)),ot.write(q)}for(var it=0,Y=0;Y<G.length;Y+=1)it+=G[Y].dataCount;if(q.getLengthInBits()>it*8)throw"code length overflow. ("+q.getLengthInBits()+">"+it*8+")";for(q.getLengthInBits()+4<=it*8&&q.put(0,4);q.getLengthInBits()%8!=0;)q.putBit(!1);for(;!(q.getLengthInBits()>=it*8||(q.put(_,8),q.getLengthInBits()>=it*8));)q.put(C,8);return st(q,G)};L.addData=function(N,F){F=F||"Byte";var P=null;switch(F){case"Numeric":P=c(N);break;case"Alphanumeric":P=h(N);break;case"Byte":P=u(N);break;case"Kanji":P=f(N);break;default:throw"mode:"+F}E.push(P),y=null},L.isDark=function(N,F){if(N<0||g<=N||F<0||g<=F)throw N+","+F;return S[N][F]},L.getModuleCount=function(){return g},L.make=function(){if(b<1){for(var N=1;N<40;N++){for(var F=a.getRSBlocks(N,A),P=l(),G=0;G<E.length;G++){var q=E[G];P.put(q.getMode(),4),P.put(q.getLength(),i.getLengthInBits(q.getMode(),N)),q.write(P)}for(var Y=0,G=0;G<F.length;G++)Y+=F[G].dataCount;if(P.getLengthInBits()<=Y*8)break}b=N}k(!1,O())},L.createTableTag=function(N,F){N=N||2,F=typeof F>"u"?N*4:F;var P="";P+='<table style="',P+=" border-width: 0px; border-style: none;",P+=" border-collapse: collapse;",P+=" padding: 0px; margin: "+F+"px;",P+='">',P+="<tbody>";for(var G=0;G<L.getModuleCount();G+=1){P+="<tr>";for(var q=0;q<L.getModuleCount();q+=1)P+='<td style="',P+=" border-width: 0px; border-style: none;",P+=" border-collapse: collapse;",P+=" padding: 0px; margin: 0px;",P+=" width: "+N+"px;",P+=" height: "+N+"px;",P+=" background-color: ",P+=L.isDark(G,q)?"#000000":"#ffffff",P+=";",P+='"/>';P+="</tr>"}return P+="</tbody>",P+="</table>",P},L.createSvgTag=function(N,F,P,G){var q={};typeof arguments[0]=="object"&&(q=arguments[0],N=q.cellSize,F=q.margin,P=q.alt,G=q.title),N=N||2,F=typeof F>"u"?N*4:F,P=typeof P=="string"?{text:P}:P||{},P.text=P.text||null,P.id=P.text?P.id||"qrcode-description":null,G=typeof G=="string"?{text:G}:G||{},G.text=G.text||null,G.id=G.text?G.id||"qrcode-title":null;var Y=L.getModuleCount()*N+F*2,ot,it,Rt,z,mt="",pt;for(pt="l"+N+",0 0,"+N+" -"+N+",0 0,-"+N+"z ",mt+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',mt+=q.scalable?"":' width="'+Y+'px" height="'+Y+'px"',mt+=' viewBox="0 0 '+Y+" "+Y+'" ',mt+=' preserveAspectRatio="xMinYMin meet"',mt+=G.text||P.text?' role="img" aria-labelledby="'+ht([G.id,P.id].join(" ").trim())+'"':"",mt+=">",mt+=G.text?'<title id="'+ht(G.id)+'">'+ht(G.text)+"</title>":"",mt+=P.text?'<description id="'+ht(P.id)+'">'+ht(P.text)+"</description>":"",mt+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',mt+='<path d="',Rt=0;Rt<L.getModuleCount();Rt+=1)for(z=Rt*N+F,ot=0;ot<L.getModuleCount();ot+=1)L.isDark(Rt,ot)&&(it=ot*N+F,mt+="M"+it+","+z+pt);return mt+='" stroke="transparent" fill="black"/>',mt+="</svg>",mt},L.createDataURL=function(N,F){N=N||2,F=typeof F>"u"?N*4:F;var P=L.getModuleCount()*N+F*2,G=F,q=P-F;return p(P,P,function(Y,ot){if(G<=Y&&Y<q&&G<=ot&&ot<q){var it=Math.floor((Y-G)/N),Rt=Math.floor((ot-G)/N);return L.isDark(Rt,it)?0:1}else return 1})},L.createImgTag=function(N,F,P){N=N||2,F=typeof F>"u"?N*4:F;var G=L.getModuleCount()*N+F*2,q="";return q+="<img",q+=' src="',q+=L.createDataURL(N,F),q+='"',q+=' width="',q+=G,q+='"',q+=' height="',q+=G,q+='"',P&&(q+=' alt="',q+=ht(P),q+='"'),q+="/>",q};var ht=function(N){for(var F="",P=0;P<N.length;P+=1){var G=N.charAt(P);switch(G){case"<":F+="&lt;";break;case">":F+="&gt;";break;case"&":F+="&amp;";break;case'"':F+="&quot;";break;default:F+=G;break}}return F},Z=function(N){var F=1;N=typeof N>"u"?F*2:N;var P=L.getModuleCount()*F+N*2,G=N,q=P-N,Y,ot,it,Rt,z,mt={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},pt={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},wt="";for(Y=0;Y<P;Y+=2){for(it=Math.floor((Y-G)/F),Rt=Math.floor((Y+1-G)/F),ot=0;ot<P;ot+=1)z="\u2588",G<=ot&&ot<q&&G<=Y&&Y<q&&L.isDark(it,Math.floor((ot-G)/F))&&(z=" "),G<=ot&&ot<q&&G<=Y+1&&Y+1<q&&L.isDark(Rt,Math.floor((ot-G)/F))?z+=" ":z+="\u2588",wt+=N<1&&Y+1>=q?pt[z]:mt[z];wt+=`
`}return P%2&&N>0?wt.substring(0,wt.length-P-1)+Array(P+1).join("\u2580"):wt.substring(0,wt.length-1)};return L.createASCII=function(N,F){if(N=N||1,N<2)return Z(F);N-=1,F=typeof F>"u"?N*2:F;var P=L.getModuleCount()*N+F*2,G=F,q=P-F,Y,ot,it,Rt,z=Array(N+1).join("\u2588\u2588"),mt=Array(N+1).join("  "),pt="",wt="";for(Y=0;Y<P;Y+=1){for(it=Math.floor((Y-G)/N),wt="",ot=0;ot<P;ot+=1)Rt=1,G<=ot&&ot<q&&G<=Y&&Y<q&&L.isDark(it,Math.floor((ot-G)/N))&&(Rt=0),wt+=Rt?z:mt;for(it=0;it<N;it+=1)pt+=wt+`
`}return pt.substring(0,pt.length-1)},L.renderTo2dContext=function(N,F){F=F||2;for(var P=L.getModuleCount(),G=0;G<P;G++)for(var q=0;q<P;q++)N.fillStyle=L.isDark(G,q)?"black":"white",N.fillRect(G*F,q*F,F,F)},L};s.stringToBytesFuncs={default:function(M){for(var w=[],_=0;_<M.length;_+=1){var C=M.charCodeAt(_);w.push(C&255)}return w}},s.stringToBytes=s.stringToBytesFuncs.default,s.createStringToBytes=function(M,w){var _=function(){for(var b=v(M),A=function(){var U=b.read();if(U==-1)throw"eof";return U},S=0,g={};;){var y=b.read();if(y==-1)break;var E=A(),L=A(),k=A(),H=String.fromCharCode(y<<8|E),O=L<<8|k;g[H]=O,S+=1}if(S!=w)throw S+" != "+w;return g}(),C=63;return function(b){for(var A=[],S=0;S<b.length;S+=1){var g=b.charCodeAt(S);if(g<128)A.push(g);else{var y=_[b.charAt(S)];typeof y=="number"?(y&255)==y?A.push(y):(A.push(y>>>8),A.push(y&255)):A.push(C)}}return A}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},e={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var M=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],w=1335,_=7973,C=21522,b={},A=function(S){for(var g=0;S!=0;)g+=1,S>>>=1;return g};return b.getBCHTypeInfo=function(S){for(var g=S<<10;A(g)-A(w)>=0;)g^=w<<A(g)-A(w);return(S<<10|g)^C},b.getBCHTypeNumber=function(S){for(var g=S<<12;A(g)-A(_)>=0;)g^=_<<A(g)-A(_);return S<<12|g},b.getPatternPosition=function(S){return M[S-1]},b.getMaskFunction=function(S){switch(S){case n.PATTERN000:return function(g,y){return(g+y)%2==0};case n.PATTERN001:return function(g,y){return g%2==0};case n.PATTERN010:return function(g,y){return y%3==0};case n.PATTERN011:return function(g,y){return(g+y)%3==0};case n.PATTERN100:return function(g,y){return(Math.floor(g/2)+Math.floor(y/3))%2==0};case n.PATTERN101:return function(g,y){return g*y%2+g*y%3==0};case n.PATTERN110:return function(g,y){return(g*y%2+g*y%3)%2==0};case n.PATTERN111:return function(g,y){return(g*y%3+(g+y)%2)%2==0};default:throw"bad maskPattern:"+S}},b.getErrorCorrectPolynomial=function(S){for(var g=o([1],0),y=0;y<S;y+=1)g=g.multiply(o([1,r.gexp(y)],0));return g},b.getLengthInBits=function(S,g){if(1<=g&&g<10)switch(S){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw"mode:"+S}else if(g<27)switch(S){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw"mode:"+S}else if(g<41)switch(S){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw"mode:"+S}else throw"type:"+g},b.getLostPoint=function(S){for(var g=S.getModuleCount(),y=0,E=0;E<g;E+=1)for(var L=0;L<g;L+=1){for(var k=0,H=S.isDark(E,L),O=-1;O<=1;O+=1)if(!(E+O<0||g<=E+O))for(var U=-1;U<=1;U+=1)L+U<0||g<=L+U||O==0&&U==0||H==S.isDark(E+O,L+U)&&(k+=1);k>5&&(y+=3+k-5)}for(var E=0;E<g-1;E+=1)for(var L=0;L<g-1;L+=1){var V=0;S.isDark(E,L)&&(V+=1),S.isDark(E+1,L)&&(V+=1),S.isDark(E,L+1)&&(V+=1),S.isDark(E+1,L+1)&&(V+=1),(V==0||V==4)&&(y+=3)}for(var E=0;E<g;E+=1)for(var L=0;L<g-6;L+=1)S.isDark(E,L)&&!S.isDark(E,L+1)&&S.isDark(E,L+2)&&S.isDark(E,L+3)&&S.isDark(E,L+4)&&!S.isDark(E,L+5)&&S.isDark(E,L+6)&&(y+=40);for(var L=0;L<g;L+=1)for(var E=0;E<g-6;E+=1)S.isDark(E,L)&&!S.isDark(E+1,L)&&S.isDark(E+2,L)&&S.isDark(E+3,L)&&S.isDark(E+4,L)&&!S.isDark(E+5,L)&&S.isDark(E+6,L)&&(y+=40);for(var B=0,L=0;L<g;L+=1)for(var E=0;E<g;E+=1)S.isDark(E,L)&&(B+=1);var tt=Math.abs(100*B/g/g-50)/5;return y+=tt*10,y},b}(),r=function(){for(var M=new Array(256),w=new Array(256),_=0;_<8;_+=1)M[_]=1<<_;for(var _=8;_<256;_+=1)M[_]=M[_-4]^M[_-5]^M[_-6]^M[_-8];for(var _=0;_<255;_+=1)w[M[_]]=_;var C={};return C.glog=function(b){if(b<1)throw"glog("+b+")";return w[b]},C.gexp=function(b){for(;b<0;)b+=255;for(;b>=256;)b-=255;return M[b]},C}();function o(M,w){if(typeof M.length>"u")throw M.length+"/"+w;var _=function(){for(var b=0;b<M.length&&M[b]==0;)b+=1;for(var A=new Array(M.length-b+w),S=0;S<M.length-b;S+=1)A[S]=M[S+b];return A}(),C={};return C.getAt=function(b){return _[b]},C.getLength=function(){return _.length},C.multiply=function(b){for(var A=new Array(C.getLength()+b.getLength()-1),S=0;S<C.getLength();S+=1)for(var g=0;g<b.getLength();g+=1)A[S+g]^=r.gexp(r.glog(C.getAt(S))+r.glog(b.getAt(g)));return o(A,0)},C.mod=function(b){if(C.getLength()-b.getLength()<0)return C;for(var A=r.glog(C.getAt(0))-r.glog(b.getAt(0)),S=new Array(C.getLength()),g=0;g<C.getLength();g+=1)S[g]=C.getAt(g);for(var g=0;g<b.getLength();g+=1)S[g]^=r.gexp(r.glog(b.getAt(g))+A);return o(S,0).mod(b)},C}var a=function(){var M=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],w=function(b,A){var S={};return S.totalCount=b,S.dataCount=A,S},_={},C=function(b,A){switch(A){case e.L:return M[(b-1)*4+0];case e.M:return M[(b-1)*4+1];case e.Q:return M[(b-1)*4+2];case e.H:return M[(b-1)*4+3];default:return}};return _.getRSBlocks=function(b,A){var S=C(b,A);if(typeof S>"u")throw"bad rs block @ typeNumber:"+b+"/errorCorrectionLevel:"+A;for(var g=S.length/3,y=[],E=0;E<g;E+=1)for(var L=S[E*3+0],k=S[E*3+1],H=S[E*3+2],O=0;O<L;O+=1)y.push(w(k,H));return y},_}(),l=function(){var M=[],w=0,_={};return _.getBuffer=function(){return M},_.getAt=function(C){var b=Math.floor(C/8);return(M[b]>>>7-C%8&1)==1},_.put=function(C,b){for(var A=0;A<b;A+=1)_.putBit((C>>>b-A-1&1)==1)},_.getLengthInBits=function(){return w},_.putBit=function(C){var b=Math.floor(w/8);M.length<=b&&M.push(0),C&&(M[b]|=128>>>w%8),w+=1},_},c=function(M){var w=t.MODE_NUMBER,_=M,C={};C.getMode=function(){return w},C.getLength=function(S){return _.length},C.write=function(S){for(var g=_,y=0;y+2<g.length;)S.put(b(g.substring(y,y+3)),10),y+=3;y<g.length&&(g.length-y==1?S.put(b(g.substring(y,y+1)),4):g.length-y==2&&S.put(b(g.substring(y,y+2)),7))};var b=function(S){for(var g=0,y=0;y<S.length;y+=1)g=g*10+A(S.charAt(y));return g},A=function(S){if("0"<=S&&S<="9")return S.charCodeAt(0)-48;throw"illegal char :"+S};return C},h=function(M){var w=t.MODE_ALPHA_NUM,_=M,C={};C.getMode=function(){return w},C.getLength=function(A){return _.length},C.write=function(A){for(var S=_,g=0;g+1<S.length;)A.put(b(S.charAt(g))*45+b(S.charAt(g+1)),11),g+=2;g<S.length&&A.put(b(S.charAt(g)),6)};var b=function(A){if("0"<=A&&A<="9")return A.charCodeAt(0)-48;if("A"<=A&&A<="Z")return A.charCodeAt(0)-65+10;switch(A){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+A}};return C},u=function(M){var w=t.MODE_8BIT_BYTE,_=M,C=s.stringToBytes(M),b={};return b.getMode=function(){return w},b.getLength=function(A){return C.length},b.write=function(A){for(var S=0;S<C.length;S+=1)A.put(C[S],8)},b},f=function(M){var w=t.MODE_KANJI,_=M,C=s.stringToBytesFuncs.SJIS;if(!C)throw"sjis not supported.";(function(S,g){var y=C(S);if(y.length!=2||(y[0]<<8|y[1])!=g)throw"sjis not supported."})("\u53CB",38726);var b=C(M),A={};return A.getMode=function(){return w},A.getLength=function(S){return~~(b.length/2)},A.write=function(S){for(var g=b,y=0;y+1<g.length;){var E=(255&g[y])<<8|255&g[y+1];if(33088<=E&&E<=40956)E-=33088;else if(57408<=E&&E<=60351)E-=49472;else throw"illegal char at "+(y+1)+"/"+E;E=(E>>>8&255)*192+(E&255),S.put(E,13),y+=2}if(y<g.length)throw"illegal char at "+(y+1)},A},d=function(){var M=[],w={};return w.writeByte=function(_){M.push(_&255)},w.writeShort=function(_){w.writeByte(_),w.writeByte(_>>>8)},w.writeBytes=function(_,C,b){C=C||0,b=b||_.length;for(var A=0;A<b;A+=1)w.writeByte(_[A+C])},w.writeString=function(_){for(var C=0;C<_.length;C+=1)w.writeByte(_.charCodeAt(C))},w.toByteArray=function(){return M},w.toString=function(){var _="";_+="[";for(var C=0;C<M.length;C+=1)C>0&&(_+=","),_+=M[C];return _+="]",_},w},x=function(){var M=0,w=0,_=0,C="",b={},A=function(g){C+=String.fromCharCode(S(g&63))},S=function(g){if(!(g<0)){if(g<26)return 65+g;if(g<52)return 97+(g-26);if(g<62)return 48+(g-52);if(g==62)return 43;if(g==63)return 47}throw"n:"+g};return b.writeByte=function(g){for(M=M<<8|g&255,w+=8,_+=1;w>=6;)A(M>>>w-6),w-=6},b.flush=function(){if(w>0&&(A(M<<6-w),M=0,w=0),_%3!=0)for(var g=3-_%3,y=0;y<g;y+=1)C+="="},b.toString=function(){return C},b},v=function(M){var w=M,_=0,C=0,b=0,A={};A.read=function(){for(;b<8;){if(_>=w.length){if(b==0)return-1;throw"unexpected end of file./"+b}var g=w.charAt(_);if(_+=1,g=="=")return b=0,-1;if(g.match(/^\s$/))continue;C=C<<6|S(g.charCodeAt(0)),b+=6}var y=C>>>b-8&255;return b-=8,y};var S=function(g){if(65<=g&&g<=90)return g-65;if(97<=g&&g<=122)return g-97+26;if(48<=g&&g<=57)return g-48+52;if(g==43)return 62;if(g==47)return 63;throw"c:"+g};return A},m=function(M,w){var _=M,C=w,b=new Array(M*w),A={};A.setPixel=function(E,L,k){b[L*_+E]=k},A.write=function(E){E.writeString("GIF87a"),E.writeShort(_),E.writeShort(C),E.writeByte(128),E.writeByte(0),E.writeByte(0),E.writeByte(0),E.writeByte(0),E.writeByte(0),E.writeByte(255),E.writeByte(255),E.writeByte(255),E.writeString(","),E.writeShort(0),E.writeShort(0),E.writeShort(_),E.writeShort(C),E.writeByte(0);var L=2,k=g(L);E.writeByte(L);for(var H=0;k.length-H>255;)E.writeByte(255),E.writeBytes(k,H,255),H+=255;E.writeByte(k.length-H),E.writeBytes(k,H,k.length-H),E.writeByte(0),E.writeString(";")};var S=function(E){var L=E,k=0,H=0,O={};return O.write=function(U,V){if(U>>>V)throw"length over";for(;k+V>=8;)L.writeByte(255&(U<<k|H)),V-=8-k,U>>>=8-k,H=0,k=0;H=U<<k|H,k=k+V},O.flush=function(){k>0&&L.writeByte(H)},O},g=function(E){for(var L=1<<E,k=(1<<E)+1,H=E+1,O=y(),U=0;U<L;U+=1)O.add(String.fromCharCode(U));O.add(String.fromCharCode(L)),O.add(String.fromCharCode(k));var V=d(),B=S(V);B.write(L,H);var tt=0,Q=String.fromCharCode(b[tt]);for(tt+=1;tt<b.length;){var st=String.fromCharCode(b[tt]);tt+=1,O.contains(Q+st)?Q=Q+st:(B.write(O.indexOf(Q),H),O.size()<4095&&(O.size()==1<<H&&(H+=1),O.add(Q+st)),Q=st)}return B.write(O.indexOf(Q),H),B.write(k,H),B.flush(),V.toByteArray()},y=function(){var E={},L=0,k={};return k.add=function(H){if(k.contains(H))throw"dup key:"+H;E[H]=L,L+=1},k.size=function(){return L},k.indexOf=function(H){return E[H]},k.contains=function(H){return typeof E[H]<"u"},k};return A},p=function(M,w,_){for(var C=m(M,w),b=0;b<w;b+=1)for(var A=0;A<M;A+=1)C.setPixel(A,b,_(A,b));var S=d();C.write(S);for(var g=x(),y=S.toByteArray(),E=0;E<y.length;E+=1)g.writeByte(y[E]);return g.flush(),"data:image/gif;base64,"+g};return s}();(function(){bf.stringToBytesFuncs["UTF-8"]=function(s){function t(e){for(var n=[],i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?n.push(r):r<2048?n.push(192|r>>6,128|r&63):r<55296||r>=57344?n.push(224|r>>12,128|r>>6&63,128|r&63):(i++,r=65536+((r&1023)<<10|e.charCodeAt(i)&1023),n.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return n}return t(s)}})();(function(s){typeof define=="function"&&define.amd?define([],s):typeof wf=="object"&&(Ef.exports=s())})(function(){return bf})});var Gl="170";var qf=0,rh=1,Yf=2;var wu=1,Wl=2,Bn=3,bn=0,Ze=1,Ge=2,ln=0,ts=1,Yr=2,oh=3,ah=4,Xl=5,zn=100,Zf=101,Kf=102,Jf=103,jf=104,$l=200,Qs=201,Qf=202,td=203,Ia=204,Pa=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,La=0,Da=1,Na=2,ss=3,Ua=4,Oa=5,Fa=6,Ba=7,Eu=0,hd=1,ud=2,ri=0,ql=1,Yl=2,Zl=3,tr=4,fd=5,Kl=6,Jl=7,lh="attached",dd="detached",Tu=300,rs=301,os=302,as=303,ka=304,Ro=306,Qe=1e3,_n=1001,Vs=1002,ze=1003,jl=1004;var ji=1005;var xe=1006,Bs=1007;var vn=1008;var Wn=1009,Au=1010,Ru=1011,Gs=1012,Ql=1013,Pi=1014,Pe=1015,Ne=1016,tc=1017,ec=1018,ls=1020,Cu=35902,Iu=1021,Pu=1022,Ye=1023,Lu=1024,Du=1025,es=1026,cs=1027,nc=1028,ic=1029,Nu=1030,sc=1031;var rc=1033,Gr=33776,Wr=33777,Xr=33778,$r=33779,za=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,$a=37496,qa=37808,Ya=37809,Za=37810,Ka=37811,Ja=37812,ja=37813,Qa=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,ol=37821,qr=36492,al=36494,ll=36495,Uu=36283,cl=36284,hl=36285,ul=36286;var hs=2300,us=2301,Zo=2302,ch=2400,hh=2401,uh=2402,pd=2500;var Ou=0,Co=1,er=2,md=3200,gd=3201;var Fu=0,xd=1,ii="",oe="srgb",be="srgb-linear",Io="linear",ne="srgb";var Fi=7680;var fh=519,_d=512,vd=513,yd=514,Bu=515,Md=516,Sd=517,bd=518,wd=519,fl=35044;var dh="300 es",Vn=2e3,Zr=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,ks=Math.PI/180,fs=180/Math.PI;function yn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function oc(s,t){return(s%t+t)%t}function Ed(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Td(s,t,e){return s!==t?(e-s)/(t-s):0}function zs(s,t,e){return(1-e)*s+e*t}function Ad(s,t,e,n){return zs(s,t,1-Math.exp(-e*n))}function Rd(s,t=1){return t-Math.abs(oc(s,t*2)-t)}function Cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Id(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Pd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ld(s,t){return s+Math.random()*(t-s)}function Dd(s){return s*(.5-Math.random())}function Nd(s){s!==void 0&&(ph=s);let t=ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ud(s){return s*ks}function Od(s){return s*fs}function Fd(s){return(s&s-1)===0&&s!==0}function Bd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*x,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*x,a*c);break;case"ZYZ":s.set(l*x,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var di={DEG2RAD:ks,RAD2DEG:fs,generateUUID:yn,clamp:Ee,euclideanModulo:oc,mapLinear:Ed,inverseLerp:Td,lerp:zs,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Id,randInt:Pd,randFloat:Ld,randFloatSpread:Dd,seededRandom:Nd,degToRad:Ud,radToDeg:Od,isPowerOfTwo:Fd,ceilPowerOfTwo:Bd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:zd,normalize:re,denormalize:xn},Ut=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=i[0],m=i[3],p=i[6],M=i[1],w=i[4],_=i[7],C=i[2],b=i[5],A=i[8];return r[0]=o*v+a*M+l*C,r[3]=o*m+a*w+l*b,r[6]=o*p+a*_+l*A,r[1]=c*v+h*M+u*C,r[4]=c*m+h*w+u*b,r[7]=c*p+h*_+u*A,r[2]=f*v+d*M+x*C,r[5]=f*m+d*w+x*b,r[8]=f*p+d*_+x*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=e*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new Gt;function ku(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hd(){let s=Ws("canvas");return s.style.display="block",s}var mh={};function Os(s){s in mh||(mh[s]=!0,console.warn(s))}function Vd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:be,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Io:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var gh=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],_h=[.3127,.329],vh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[be]:{primaries:gh,whitePoint:_h,transfer:Io,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:oe},outputColorSpaceConfig:{drawingBufferColorSpace:oe}},[oe]:{primaries:gh,whitePoint:_h,transfer:ne,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:oe}}});var Bi,dl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Ws("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xd=0,Kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jo(i[o].image)):r.push(Jo(i[o]))}else r=Jo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $d=0,ye=class s extends oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=_n,i=_n,r=xe,o=vn,a=Ye,l=Wn,c=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=yn(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qe:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qe:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Tu;ye.DEFAULT_ANISOTROPY=1;var Qt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(d+1)/2,C=(p+1)/2,b=(h+f)/4,A=(u+v)/4,S=(x+m)/4;return w>_&&w>C?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=A/n):_>C?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=S/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=S/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==x){let m=1-a,p=l*f+c*d+h*x+u*v,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let C=Math.sqrt(w),b=Math.atan2(C,p*M);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}let _=a*M;if(l=l*m+f*_,c=c*m+d*_,h=h*m+x*_,u=u*m+v*_,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new D,Mh=new Oe,We=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),gr.subVectors(this.max,Rs),ki.subVectors(t.a,Rs),zi.subVectors(t.b,Rs),Hi.subVectors(t.c,Rs),Jn.subVectors(zi,ki),jn.subVectors(Hi,zi),Si.subVectors(ki,Hi);let e=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-Si.z,Si.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,Si.z,0,-Si.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-Si.y,Si.x,0];return!Qo(e,ki,zi,Hi,gr)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ki,zi,Hi,gr))?!1:(xr.crossVectors(Jn,jn),e=[xr.x,xr.y,xr.z],Qo(e,ki,zi,Hi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,mr=new We,ki=new D,zi=new D,Hi=new D,Jn=new D,jn=new D,Si=new D,Rs=new D,gr=new D,xr=new D,bi=new D;function Qo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bi.fromArray(s,r);let a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qd=new We,Cs=new D,ta=new D,tn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(ta)),this.expandByPoint(Cs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dn=new D,ea=new D,_r=new D,Qn=new D,na=new D,vr=new D,ia=new D,ds=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ea.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=Qn.dot(this.direction),l=-Qn.dot(_r),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ea).addScaledVector(_r,f),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){na.subVectors(e,t),vr.subVectors(n,t),ia.crossVectors(na,vr);let o=this.direction.dot(ia),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(vr.crossVectors(Qn,vr));if(l<0)return null;let c=a*this.direction.dot(na.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(ia);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,x,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,x,v,m)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,x,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,v=c*u;e[0]=f+v*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,v=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yd,t,Zd)}lookAt(t,e,n){let i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ti.crossVectors(n,Je),ti.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ti.crossVectors(n,Je)),ti.normalize(),yr.crossVectors(Je,ti),i[0]=ti.x,i[4]=yr.x,i[8]=Je.x,i[1]=ti.y,i[5]=yr.y,i[9]=Je.y,i[2]=ti.z,i[6]=yr.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],m=n[10],p=n[14],M=n[3],w=n[7],_=n[11],C=n[15],b=i[0],A=i[4],S=i[8],g=i[12],y=i[1],E=i[5],L=i[9],k=i[13],H=i[2],O=i[6],U=i[10],V=i[14],B=i[3],tt=i[7],Q=i[11],st=i[15];return r[0]=o*b+a*y+l*H+c*B,r[4]=o*A+a*E+l*O+c*tt,r[8]=o*S+a*L+l*U+c*Q,r[12]=o*g+a*k+l*V+c*st,r[1]=h*b+u*y+f*H+d*B,r[5]=h*A+u*E+f*O+d*tt,r[9]=h*S+u*L+f*U+d*Q,r[13]=h*g+u*k+f*V+d*st,r[2]=x*b+v*y+m*H+p*B,r[6]=x*A+v*E+m*O+p*tt,r[10]=x*S+v*L+m*U+p*Q,r[14]=x*g+v*k+m*V+p*st,r[3]=M*b+w*y+_*H+C*B,r[7]=M*A+w*E+_*O+C*tt,r[11]=M*S+w*L+_*U+C*Q,r[15]=M*g+w*k+_*V+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],v=t[7],m=t[11],p=t[15];return x*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,w=x*f*c-h*m*c-x*l*d+o*m*d+h*l*p-o*f*p,_=h*v*c-x*u*c+x*a*d-o*v*d-h*a*p+o*u*p,C=x*u*l-h*v*l-x*a*f+o*v*f+h*a*m-o*u*m,b=e*M+n*w+i*_+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return t[0]=M*A,t[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*A,t[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*A,t[4]=w*A,t[5]=(h*m*r-x*f*r+x*i*d-e*m*d-h*i*p+e*f*p)*A,t[6]=(x*l*r-o*m*r-x*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*A,t[8]=_*A,t[9]=(x*u*r-h*v*r-x*n*d+e*v*d+h*n*p-e*u*p)*A,t[10]=(o*v*r-x*a*r+x*n*c-e*v*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=C*A,t[13]=(h*v*i-x*u*i+x*n*f-e*v*f-h*n*m+e*u*m)*A,t[14]=(x*a*i-o*v*i-x*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,v=o*h,m=o*u,p=a*u,M=l*c,w=l*h,_=l*u,C=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*C,i[1]=(d+_)*C,i[2]=(x-w)*C,i[3]=0,i[4]=(d-_)*b,i[5]=(1-(f+p))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(x+w)*A,i[9]=(m-M)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Vi.set(i[0],i[1],i[2]).length(),o=Vi.set(i[4],i[5],i[6]).length(),a=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);let c=1/r,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,x;if(a===Vn)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Zr)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,x,v;if(a===Vn)x=(o+r)*u,v=-2*u;else if(a===Zr)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new D,mn=new Ot,Yd=new D(0,0,0),Zd=new D(1,1,1),ti=new D,yr=new D,Je=new D,Sh=new Ot,bh=new Oe,cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,wh=new D,Gi=new Oe,Nn=new Ot,Mr=new D,Is=new D,Jd=new D,jd=new Oe,Eh=new D(1,0,0),Th=new D(0,1,0),Ah=new D(0,0,1),Rh={type:"added"},Qd={type:"removed"},Wi={type:"childadded",child:null},sa={type:"childremoved",child:null},fe=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new cn,n=new Oe,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Gt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Is,Mr,this.up):Nn.lookAt(Mr,Is,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};fe.DEFAULT_UP=new D(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new D,Un=new D,ra=new D,On=new D,Xi=new D,$i=new D,Ch=new D,oa=new D,aa=new D,la=new D,ca=new Qt,ha=new Qt,ua=new Qt,Ci=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gn.subVectors(i,e),Un.subVectors(n,e),ra.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Un),l=gn.dot(ra),c=Un.dot(Un),h=Un.dot(ra),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),Un.subVectors(t,e),gn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),gn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Xi.subVectors(i,n),$i.subVectors(r,n),oa.subVectors(t,n);let l=Xi.dot(oa),c=$i.dot(oa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,i);let h=Xi.dot(aa),u=$i.dot(aa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xi,o);la.subVectors(t,r);let d=Xi.dot(la),x=$i.dot(la);if(x>=0&&d<=x)return e.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector($i,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return Ch.subVectors(r,i),a=(u-h)/(u-h+(d-x)),e.copy(i).addScaledVector(Ch,a);let p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Xi,o).addScaledVector($i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=oc(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return qt.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ee(ke.r*255,0,255))*65536+Math.round(Ee(ke.g*255,0,255))*256+Math.round(Ee(ke.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,i=ke.g,r=ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=oe){qt.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,i=ke.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Sr);let n=zs(ei.h,Sr.h,e),i=zs(ei.s,Sr.s,e),r=zs(ei.l,Sr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new At;At.NAMES=zu;var tp=0,en=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=yn(),this.name="",this.blending=ts,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},De=class extends en{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hn=ep();function ep(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function np(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ee(s,-65504,65504),Hn.floatView[0]=s;let t=Hn.uint32View[0],e=t>>23&511;return Hn.baseTable[e]+((t&8388607)>>Hn.shiftTable[e])}function ip(s){let t=s>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[t]+(s&1023)]+Hn.exponentTable[t],Hn.floatView[0]}var nr={toHalfFloat:np,fromHalfFloat:ip},Me=new D,br=new Ut,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Pe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var Qr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var to=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},sp=0,an=new Ot,da=new fe,qi=new D,je=new We,Ps=new We,Ie=new D,_e=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?to:Qr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(je.min,Ps.min),je.expandByPoint(Ie),Ie.addVectors(je.max,Ps.max),je.expandByPoint(Ie)):(je.expandByPoint(Ps.min),je.expandByPoint(Ps.max))}je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ie.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),Ie.add(qi)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new D,l[S]=new D;let c=new D,h=new D,u=new D,f=new Ut,d=new Ut,x=new Ut,v=new D,m=new D;function p(S,g,y){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,g),x.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let E=1/(d.x*x.y-x.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(E),a[S].add(v),a[g].add(v),a[y].add(v),l[S].add(m),l[g].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let S=0,g=M.length;S<g;++S){let y=M[S],E=y.start,L=y.count;for(let k=E,H=E+L;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new D,_=new D,C=new D,b=new D;function A(S){C.fromBufferAttribute(i,S),b.copy(C);let g=a[S];w.copy(g),w.sub(C.multiplyScalar(C.dot(g))).normalize(),_.crossVectors(b,g);let E=_.dot(l[S])<0?-1:1;o.setXYZW(S,w.x,w.y,w.z,E)}for(let S=0,g=M.length;S<g;++S){let y=M[S],E=y.start,L=y.count;for(let k=E,H=E+L;k<H;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Se(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new Ot,wi=new ds,wr=new tn,Ph=new D,Er=new D,Tr=new D,Ar=new D,pa=new D,Rr=new D,Lh=new D,Cr=new D,Dt=class extends fe{constructor(t=new _e,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),o?Rr.addScaledVector(pa,h):Rr.addScaledVector(pa.sub(e),h))}e.add(Rr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(wr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(wr,Ph)===null||wi.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,C=w;_<C;_+=3){let b=a.getX(_),A=a.getX(_+1),S=a.getX(_+2);i=Ir(this,p,t,n,c,h,u,b,A,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);i=Ir(this,o,t,n,c,h,u,M,w,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,C=w;_<C;_+=3){let b=_,A=_+1,S=_+2;i=Ir(this,p,t,n,c,h,u,b,A,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=x,p=v;m<p;m+=3){let M=m,w=m+1,_=m+2;i=Ir(this,o,t,n,c,h,u,M,w,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function rp(s,t,e,n,i,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===bn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:s}}function Ir(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Er),s.getVertexPosition(l,Tr),s.getVertexPosition(c,Ar);let h=rp(s,t,e,n,Er,Tr,Ar,Lh);if(h){let u=new D;Ci.getBarycoord(Lh,Er,Tr,Ar,u),i&&(h.uv=Ci.getInterpolatedAttribute(i,a,l,c,u,new Ut)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,u,new Ut)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Ci.getNormal(Er,Tr,Ar,f.normal),h.face=f,h.barycoord=u}return h}var me=class s extends _e{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function x(v,m,p,M,w,_,C,b,A,S,g){let y=_/A,E=C/S,L=_/2,k=C/2,H=b/2,O=A+1,U=S+1,V=0,B=0,tt=new D;for(let Q=0;Q<U;Q++){let st=Q*E-k;for(let rt=0;rt<O;rt++){let ht=rt*y-L;tt[v]=ht*M,tt[m]=st*w,tt[p]=H,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[p]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(rt/A),u.push(1-Q/S),V+=1}}for(let Q=0;Q<S;Q++)for(let st=0;st<A;st++){let rt=f+st+O*Q,ht=f+st+O*(Q+1),Z=f+(st+1)+O*(Q+1),N=f+(st+1)+O*Q;l.push(rt,ht,N),l.push(ht,Z,N),B+=6}a.addGroup(d,B,g),d+=B,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let n=ps(s[e]);for(let i in n)t[i]=n[i]}return t}function op(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var pi={clone:ps,merge:Ve},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends en{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},eo=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new D,Dh=new Ut,Nh=new Ut,Te=class extends eo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Nh),e.subVectors(Nh,Dh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,gl=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Te(Yi,Zi,t,e);i.layers=this.layers,this.add(i);let r=new Te(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Te(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Te(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let l=new Te(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Te(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},no=class extends ye{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xl=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new no(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new me(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ln});r.uniforms.tEquirect.value=e;let o=new Dt(i,r),a=e.minFilter;return e.minFilter===vn&&(e.minFilter=xe),new gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ma=new D,cp=new D,hp=new Gt,kn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ma.subVectors(n,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hp.getNormalMatrix(t),i=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new tn,Pr=new D,Xs=class{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],x=i[9],v=i[10],m=i[11],p=i[12],M=i[13],w=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+o,f+h,m+x,_+M).normalize(),n[3].setComponents(l-o,f-h,m-x,_-M).normalize(),n[4].setComponents(l-a,f-u,m-v,_-w).normalize(),e===Vn)n[5].setComponents(l+a,f+u,m+v,_+w).normalize();else if(e===Zr)n[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pr.x=i.normal.x>0?t.max.x:t.min.x,Pr.y=i.normal.y>0?t.max.y:t.min.y,Pr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function up(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],v=u[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Xe=class s extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*f-o;for(let w=0;w<c;w++){let _=w*u-r;x.push(_,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let w=M+c*p,_=M+c*(p+1),C=M+1+c*(p+1),b=M+1+c*p;d.push(w,_,b),d.push(_,C,b)}this.setIndex(d),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:fp,alphahash_pars_fragment:dp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:Sp,beginnormal_vertex:bp,bsdfs:wp,iridescence_fragment:Ep,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Ip,color_fragment:Pp,color_pars_fragment:Lp,color_pars_vertex:Dp,color_vertex:Np,common:Up,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Bp,displacementmap_vertex:kp,emissivemap_fragment:zp,emissivemap_pars_fragment:Hp,colorspace_fragment:Vp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:$p,envmap_pars_vertex:qp,envmap_physical_pars_fragment:sm,envmap_vertex:Yp,fog_vertex:Zp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:tm,lights_lambert_fragment:em,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:fm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:xm,map_fragment:_m,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:bm,morphinstance_vertex:wm,morphcolor_vertex:Em,morphnormal_vertex:Tm,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Im,normal_pars_fragment:Pm,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Bm,opaque_fragment:km,packing:zm,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Ym,shadowmap_vertex:Zm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:hg,background_vert:ug,background_frag:fg,backgroundCube_vert:dg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:xg,depth_frag:_g,distanceRGBA_vert:vg,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:bg,linedashed_frag:wg,meshbasic_vert:Eg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Ig,meshnormal_vert:Pg,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ng,meshphysical_vert:Ug,meshphysical_frag:Og,meshtoon_vert:Fg,meshtoon_frag:Bg,points_vert:kg,points_frag:zg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ve([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ve([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ve([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ve([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ve([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ve([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ve([gt.common,gt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ve([gt.lights,gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Sn.physical={uniforms:Ve([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Lr={r:0,b:0,g:0},Ti=new cn,Xg=new Ot;function $g(s,t,e,n,i,r,o){let a=new At(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function v(M){let w=!1,_=x(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),w=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,w){let _=x(w);_&&(_.isCubeTexture||_.mapping===Ro)?(h===void 0&&(h=new Dt(new me(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:ps(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ti.copy(w.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Ti)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==ne,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dt(new Xe(2,2),new Ae({name:"BackgroundMaterial",uniforms:ps(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qt.getTransfer(_.colorSpace)!==ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(Lr,Hu(s)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m}}function qg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,E,L,k,H){let O=!1,U=u(k,L,E);r!==U&&(r=U,c(r.object)),O=d(y,k,L,H),O&&x(y,k,L,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(y,E,L,k),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,E,L){let k=L.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let O=H[E.id];O===void 0&&(O={},H[E.id]=O);let U=O[k];return U===void 0&&(U=f(l()),O[k]=U),U}function f(y){let E=[],L=[],k=[];for(let H=0;H<e;H++)E[H]=0,L[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,E,L,k){let H=r.attributes,O=E.attributes,U=0,V=L.getAttributes();for(let B in V)if(V[B].location>=0){let Q=H[B],st=O[B];if(st===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),Q===void 0||Q.attribute!==st||st&&Q.data!==st.data)return!0;U++}return r.attributesNum!==U||r.index!==k}function x(y,E,L,k){let H={},O=E.attributes,U=0,V=L.getAttributes();for(let B in V)if(V[B].location>=0){let Q=O[B];Q===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));let st={};st.attribute=Q,Q&&Q.data&&(st.data=Q.data),H[B]=st,U++}r.attributes=H,r.attributesNum=U,r.index=k}function v(){let y=r.newAttributes;for(let E=0,L=y.length;E<L;E++)y[E]=0}function m(y){p(y,0)}function p(y,E){let L=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;L[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),H[y]!==E&&(s.vertexAttribDivisor(y,E),H[y]=E)}function M(){let y=r.newAttributes,E=r.enabledAttributes;for(let L=0,k=E.length;L<k;L++)E[L]!==y[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function w(y,E,L,k,H,O,U){U===!0?s.vertexAttribIPointer(y,E,L,H,O):s.vertexAttribPointer(y,E,L,k,H,O)}function _(y,E,L,k){v();let H=k.attributes,O=L.getAttributes(),U=E.defaultAttributeValues;for(let V in O){let B=O[V];if(B.location>=0){let tt=H[V];if(tt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let Q=tt.normalized,st=tt.itemSize,rt=t.get(tt);if(rt===void 0)continue;let ht=rt.buffer,Z=rt.type,N=rt.bytesPerElement,F=Z===s.INT||Z===s.UNSIGNED_INT||tt.gpuType===Ql;if(tt.isInterleavedBufferAttribute){let P=tt.data,G=P.stride,q=tt.offset;if(P.isInstancedInterleavedBuffer){for(let Y=0;Y<B.locationSize;Y++)p(B.location+Y,P.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Y=0;Y<B.locationSize;Y++)w(B.location+Y,st/B.locationSize,Z,Q,G*N,(q+st/B.locationSize*Y)*N,F)}else{if(tt.isInstancedBufferAttribute){for(let P=0;P<B.locationSize;P++)p(B.location+P,tt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let P=0;P<B.locationSize;P++)m(B.location+P);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let P=0;P<B.locationSize;P++)w(B.location+P,st/B.locationSize,Z,Q,st*N,st/B.locationSize*P*N,F)}}else if(U!==void 0){let Q=U[V];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(B.location,Q);break;case 3:s.vertexAttrib3fv(B.location,Q);break;case 4:s.vertexAttrib4fv(B.location,Q);break;default:s.vertexAttrib1fv(B.location,Q)}}}}M()}function C(){S();for(let y in n){let E=n[y];for(let L in E){let k=E[L];for(let H in k)h(k[H].object),delete k[H];delete E[L]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let L in E){let k=E[L];for(let H in k)h(k[H].object),delete k[H];delete E[L]}delete n[y.id]}function A(y){for(let E in n){let L=n[E];if(L[y.id]===void 0)continue;let k=L[y.id];for(let H in k)h(k[H].object),delete k[H];delete L[y.id]}}function S(){g(),o=!0,r!==i&&(r=i,c(r.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:g,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Yg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*f[v];e.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ye&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let S=A===Ne&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pe&&!S)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:C,maxSamples:b}}function Kg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new kn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,_=p.clippingState||null;l.value=_,_=h(x,f,w,d);for(let C=0;C!==w;++C)_[C]=e[C];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=d+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=d;w!==v;++w,_+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Jg(s){let t=new WeakMap;function e(o,a){return a===as?o.mapping=rs:a===ka&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===as||a===ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ai=class extends eo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Uh=[.125,.215,.35,.446,.526,.582],Ii=20,ga=new ai,Oh=new At,xa=null,_a=0,va=0,ya=!1,Ri=(1+Math.sqrt(5))/2,Ki=1/Ri,Fh=[new D(-Ri,Ki,0),new D(Ri,Ki,0),new D(-Ki,0,Ri),new D(Ki,0,Ri),new D(0,Ri,-Ki),new D(0,Ri,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ms=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,_a,va),this._renderer.xr.enabled=ya,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xe,minFilter:xe,generateMipmaps:!1,type:Ne,format:Ye,colorSpace:be,depthBuffer:!1},i=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=Qg(r,t,e)}return i}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,i){let a=new Te(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Oh),h.toneMapping=ri,h.autoClear=!1;let d=new De({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),x=new Dt(new me,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Oh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;Dr(i,M*w,p>2?w:0,w,w),h.setRenderTarget(i),v&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(i-r-1)%Fh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],M=0;for(let A=0;A<Ii;++A){let S=A/v,g=Math.exp(-S*S/2);p.push(g),A===0?M+=g:A<m&&(M+=2*g)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;let _=this._sizeLods[i],C=3*_*(i>w-Qi?i-w+Qi:0),b=4*(this._cubeSize-_);Dr(e,C,b,3*_,2*_),l.setRenderTarget(e),l.render(u,ga)}};function jg(s){let t=[],e=[],n=[],i=s,r=s-Qi+1+Uh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Qi?l=Uh[o-s+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,v=3,m=2,p=1,M=new Float32Array(v*x*d),w=new Float32Array(m*x*d),_=new Float32Array(p*x*d);for(let b=0;b<d;b++){let A=b%3*2/3-1,S=b>2?0:-1,g=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];M.set(g,v*x*b),w.set(f,m*x*b);let y=[b,b,b,b,b,b];_.set(y,p*x*b)}let C=new _e;C.setAttribute("position",new Se(M,v)),C.setAttribute("uv",new Se(w,m)),C.setAttribute("faceIndex",new Se(_,p)),t.push(C),i>Qi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(s,t,e){let n=new Ue(s,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qg(s,t,e){let n=new Float32Array(Ii),i=new D(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function kh(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function zh(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===as||l===ka,h=l===rs||l===os;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ms(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ms(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let v=d[x];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let w=0,_=M.length;w<_;w+=3){let C=M[w+0],b=M[w+1],A=M[w+2];f.push(C,b,b,A,A,C)}}else if(x!==void 0){let M=x.array;v=x.version;for(let w=0,_=M.length/3-1;w<_;w+=3){let C=w+0,b=w+1,A=w+2;f.push(C,b,b,A,A,C)}}else return;let m=new(ku(f)?to:Qr)(f,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function u(f,d,x,v){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,x);let p=0;for(let M=0;M<x;M++)p+=d[M]*v[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r0(s,t,e){let n=new WeakMap,i=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let g=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",g)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;d===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let _=a.attributes.position.count*w,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*C*4*u),A=new Jr(b,_,C,u);A.type=Pe,A.needsUpdate=!0;let S=w*4;for(let y=0;y<u;y++){let E=m[y],L=p[y],k=M[y],H=_*C*4*y;for(let O=0;O<E.count;O++){let U=O*S;d===!0&&(i.fromBufferAttribute(E,O),b[H+U+0]=i.x,b[H+U+1]=i.y,b[H+U+2]=i.z,b[H+U+3]=0),x===!0&&(i.fromBufferAttribute(L,O),b[H+U+4]=i.x,b[H+U+5]=i.y,b[H+U+6]=i.z,b[H+U+7]=0),v===!0&&(i.fromBufferAttribute(k,O),b[H+U+8]=i.x,b[H+U+9]=i.y,b[H+U+10]=i.z,b[H+U+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new Ut(_,C)},n.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function o0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var io=class extends ye{constructor(t,e,n,i,r,o,a,l,c,h=es){if(h!==es&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Pi),n===void 0&&h===cs&&(n=ls),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Gu=new ye,Hh=new io(1,1),Wu=new Jr,Xu=new ml,$u=new no,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),$h=new Float32Array(4);function ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Vh[i];if(r===void 0&&(r=new Float32Array(i),Vh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Po(s,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function a0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function u0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$h.set(n),s.uniformMatrix2fv(this.addr,!1,$h),Ce(e,n)}}function f0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Xh.set(n),s.uniformMatrix3fv(this.addr,!1,Xh),Ce(e,n)}}function d0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Wh.set(n),s.uniformMatrix4fv(this.addr,!1,Wh),Ce(e,n)}}function p0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function x0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function S0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hh.compareFunction=Bu,r=Hh):r=Gu,e.setTexture2D(t||r,i)}function b0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xu,i)}function w0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$u,i)}function E0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wu,i)}function T0(s){switch(s){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return v0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}function A0(s,t){s.uniform1fv(this.addr,t)}function R0(s,t){let e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function C0(s,t){let e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function I0(s,t){let e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function P0(s,t){let e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function L0(s,t){let e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function D0(s,t){let e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function N0(s,t){s.uniform1iv(this.addr,t)}function U0(s,t){s.uniform2iv(this.addr,t)}function O0(s,t){s.uniform3iv(this.addr,t)}function F0(s,t){s.uniform4iv(this.addr,t)}function B0(s,t){s.uniform1uiv(this.addr,t)}function k0(s,t){s.uniform2uiv(this.addr,t)}function z0(s,t){s.uniform3uiv(this.addr,t)}function H0(s,t){s.uniform4uiv(this.addr,t)}function V0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gu,r[o])}function G0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xu,r[o])}function W0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$u,r[o])}function X0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wu,r[o])}function $0(s){switch(s){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return I0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return k0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var _l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}},yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function qh(s,t){s.seq.push(t),s.map[t.id]=t}function q0(s,t,e){let n=s.name,i=n.length;for(Ma.lastIndex=0;;){let r=Ma.exec(n),o=Ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qh(e,c===void 0?new _l(a,s,t):new vl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new yl(a),qh(e,u)),e=u}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);q0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Yh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Y0=37297,Z0=0;function K0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zh=new Gt;function J0(s){qt._getMatrix(Zh,qt.workingColorSpace,s);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case Io:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+K0(s.getShaderSource(t),o)}else return i}function j0(s,t){let e=J0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q0(s,t){let e;switch(t){case ql:e="Linear";break;case Yl:e="Reinhard";break;case Zl:e="Cineon";break;case tr:e="ACESFilmic";break;case Kl:e="AgX";break;case Jl:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new D;function tx(){qt.getLuminanceCoefficients(Nr);let s=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function nx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ix(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Fs(s){return s!==""}function Jh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(sx,ox)}var rx=new Map;function ox(s,t){let e=Xt[t];if(e===void 0){let n=rx.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}var ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(s){return s.replace(ax,lx)}function lx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function hx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ux(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function fx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eu:t="ENVMAP_BLENDING_MULTIPLY";break;case hd:t="ENVMAP_BLENDING_MIX";break;case ud:t="ENVMAP_BLENDING_ADD";break}return t}function dx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function px(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cx(e),c=hx(e),h=ux(e),u=fx(e),f=dx(e),d=ex(e),x=nx(r),v=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Xt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Ml(o),o=Jh(o,e),o=jh(o,e),a=Ml(a),a=Jh(a,e),a=jh(a,e),o=Qh(o),a=Qh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,_=M+p+a,C=Yh(i,i.VERTEX_SHADER,w),b=Yh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,C),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(E){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(v).trim(),k=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(b).trim(),O=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,b);else{let V=Kh(i,C,"vertex"),B=Kh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+V+`
`+B)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||H==="")&&(U=!1);U&&(E.diagnostics={runnable:O,programLog:L,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(C),i.deleteShader(b),S=new is(i,v),g=ix(i,v)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let g;this.getAttributes=function(){return g===void 0&&A(this),g};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Y0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}var mx=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=mx++,this.code=t,this.usedTimes=0}};function gx(s,t,e,n,i,r,o){let a=new jr,l=new Sl,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,y,E,L,k){let H=L.fog,O=k.geometry,U=g.isMeshStandardMaterial?L.environment:null,V=(g.isMeshStandardMaterial?e:t).get(g.envMap||U),B=V&&V.mapping===Ro?V.image.height:null,tt=x[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,st=Q!==void 0?Q.length:0,rt=0;O.morphAttributes.position!==void 0&&(rt=1),O.morphAttributes.normal!==void 0&&(rt=2),O.morphAttributes.color!==void 0&&(rt=3);let ht,Z,N,F;if(tt){let se=Sn[tt];ht=se.vertexShader,Z=se.fragmentShader}else ht=g.vertexShader,Z=g.fragmentShader,l.update(g),N=l.getVertexShaderID(g),F=l.getFragmentShaderID(g);let P=s.getRenderTarget(),G=s.state.buffers.depth.getReversed(),q=k.isInstancedMesh===!0,Y=k.isBatchedMesh===!0,ot=!!g.map,it=!!g.matcap,Rt=!!V,z=!!g.aoMap,mt=!!g.lightMap,pt=!!g.bumpMap,wt=!!g.normalMap,vt=!!g.displacementMap,kt=!!g.emissiveMap,dt=!!g.metalnessMap,I=!!g.roughnessMap,T=g.anisotropy>0,K=g.clearcoat>0,at=g.dispersion>0,ct=g.iridescence>0,nt=g.sheen>0,Ct=g.transmission>0,xt=T&&!!g.anisotropyMap,St=K&&!!g.clearcoatMap,Yt=K&&!!g.clearcoatNormalMap,ut=K&&!!g.clearcoatRoughnessMap,Et=ct&&!!g.iridescenceMap,Ft=ct&&!!g.iridescenceThicknessMap,Bt=nt&&!!g.sheenColorMap,Tt=nt&&!!g.sheenRoughnessMap,Kt=!!g.specularMap,Wt=!!g.specularColorMap,ae=!!g.specularIntensityMap,W=Ct&&!!g.transmissionMap,_t=Ct&&!!g.thicknessMap,et=!!g.gradientMap,lt=!!g.alphaMap,bt=g.alphaTest>0,yt=!!g.alphaHash,Ht=!!g.extensions,ve=ri;g.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=s.toneMapping);let Fe={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:ht,fragmentShader:Z,defines:g.defines,customVertexShaderID:N,customFragmentShaderID:F,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Y,batchingColor:Y&&k._colorsTexture!==null,instancing:q,instancingColor:q&&k.instanceColor!==null,instancingMorph:q&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:be,alphaToCoverage:!!g.alphaToCoverage,map:ot,matcap:it,envMap:Rt,envMapMode:Rt&&V.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:mt,bumpMap:pt,normalMap:wt,displacementMap:f&&vt,emissiveMap:kt,normalMapObjectSpace:wt&&g.normalMapType===xd,normalMapTangentSpace:wt&&g.normalMapType===Fu,metalnessMap:dt,roughnessMap:I,anisotropy:T,anisotropyMap:xt,clearcoat:K,clearcoatMap:St,clearcoatNormalMap:Yt,clearcoatRoughnessMap:ut,dispersion:at,iridescence:ct,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:ae,transmission:Ct,transmissionMap:W,thicknessMap:_t,gradientMap:et,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:lt,alphaTest:bt,alphaHash:yt,combine:g.combine,mapUv:ot&&v(g.map.channel),aoMapUv:z&&v(g.aoMap.channel),lightMapUv:mt&&v(g.lightMap.channel),bumpMapUv:pt&&v(g.bumpMap.channel),normalMapUv:wt&&v(g.normalMap.channel),displacementMapUv:vt&&v(g.displacementMap.channel),emissiveMapUv:kt&&v(g.emissiveMap.channel),metalnessMapUv:dt&&v(g.metalnessMap.channel),roughnessMapUv:I&&v(g.roughnessMap.channel),anisotropyMapUv:xt&&v(g.anisotropyMap.channel),clearcoatMapUv:St&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(g.sheenRoughnessMap.channel),specularMapUv:Kt&&v(g.specularMap.channel),specularColorMapUv:Wt&&v(g.specularColorMap.channel),specularIntensityMapUv:ae&&v(g.specularIntensityMap.channel),transmissionMapUv:W&&v(g.transmissionMap.channel),thicknessMapUv:_t&&v(g.thicknessMap.channel),alphaMapUv:lt&&v(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(wt||T),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(ot||lt),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:G,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:ot&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===ne,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===ne,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ge,flipSided:g.side===Ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ht&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&g.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let E in g.defines)y.push(E),y.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(M(y,g),w(y,g),y.push(s.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function M(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function w(g,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),g.push(a.mask)}function _(g){let y=x[g.type],E;if(y){let L=Sn[y];E=pi.clone(L.uniforms)}else E=g.uniforms;return E}function C(g,y){let E;for(let L=0,k=h.length;L<k;L++){let H=h[L];if(H.cacheKey===y){E=H,++E.usedTimes;break}}return E===void 0&&(E=new px(s,y,g,r),h.push(E)),E}function b(g){if(--g.usedTimes===0){let y=h.indexOf(g);h[y]=h[h.length-1],h.pop(),g.destroy()}}function A(g){l.remove(g)}function S(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:S}}function xx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _x(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,x,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,x,v,m){let p=o(u,f,d,x,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,x,v,m){let p=o(u,f,d,x,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||_x),n.length>1&&n.sort(f||eu),i.length>1&&i.sort(f||eu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function vx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new nu,s.set(n,[o])):i>=r.length?(o=new nu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new At};break;case"SpotLight":e={position:new D,direction:new D,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Sx=0;function bx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wx(s){let t=new yx,e=Mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new Ot,o=new Ot;function a(c){let h=0,u=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let d=0,x=0,v=0,m=0,p=0,M=0,w=0,_=0,C=0,b=0,A=0;c.sort(bx);for(let g=0,y=c.length;g<y;g++){let E=c[g],L=E.color,k=E.intensity,H=E.distance,O=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*k,u+=L.g*k,f+=L.b*k;else if(E.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(E.sh.coefficients[U],k);A++}else if(E.isDirectionalLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let V=E.shadow,B=e.get(E);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=E.shadow.matrix,M++}n.directional[d]=U,d++}else if(E.isSpotLight){let U=t.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(L).multiplyScalar(k),U.distance=H,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,n.spot[v]=U;let V=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,V.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[v]=V.matrix,E.castShadow){let B=e.get(E);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=O,_++}v++}else if(E.isRectAreaLight){let U=t.get(E);U.color.copy(L).multiplyScalar(k),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=U,m++}else if(E.isPointLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){let V=E.shadow,B=e.get(E);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[x]=B,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=E.shadow.matrix,w++}n.point[x]=U,x++}else if(E.isHemisphereLight){let U=t.get(E);U.skyColor.copy(E.color).multiplyScalar(k),U.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==d||S.pointLength!==x||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==M||S.numPointShadows!==w||S.numSpotShadows!==_||S.numSpotMaps!==C||S.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=_+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,S.directionalLength=d,S.pointLength=x,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=M,S.numPointShadows=w,S.numSpotShadows=_,S.numSpotMaps=C,S.numLightProbes=A,n.version=Sx++)}function l(c,h){let u=0,f=0,d=0,x=0,v=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let w=c[p];if(w.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(w.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function iu(s){let t=new wx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ex(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new iu(s),t.set(i,[a])):r>=o.length?(a=new iu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wl=class extends en{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends en{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(s,t,e){let n=new Xs,i=new Ut,r=new Ut,o=new Qt,a=new wl({depthPacking:gd}),l=new El,c={},h=e.maxTextureSize,u={[bn]:Ze,[Ze]:bn,[Ge]:Ge},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new _e;x.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Dt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let p=this.type;this.render=function(b,A,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let g=s.getRenderTarget(),y=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ln),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==Bn&&this.type===Bn,H=p===Bn&&this.type!==Bn;for(let O=0,U=b.length;O<U;O++){let V=b[O],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let tt=B.getFrameExtents();if(i.multiply(tt),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,B.mapSize.y=r.y)),B.map===null||k===!0||H===!0){let st=this.type!==Bn?{minFilter:ze,magFilter:ze}:{};B.map!==null&&B.map.dispose(),B.map=new Ue(i.x,i.y,st),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let Q=B.getViewportCount();for(let st=0;st<Q;st++){let rt=B.getViewport(st);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),L.viewport(o),B.updateMatrices(V,st),n=B.getFrustum(),_(A,S,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Bn&&M(B,S),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(g,y,E)};function M(b,A){let S=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ue(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,S,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,S,d,v,null)}function w(b,A,S,g){let y=null,E=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)y=E;else if(y=S.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=y.uuid,k=A.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let O=H[k];O===void 0&&(O=y.clone(),H[k]=O,A.addEventListener("dispose",C)),y=O}if(y.visible=A.visible,y.wireframe=A.wireframe,g===Bn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,S.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=S}return y}function _(b,A,S,g,y){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let k=t.update(b),H=b.material;if(Array.isArray(H)){let O=k.groups;for(let U=0,V=O.length;U<V;U++){let B=O[U],tt=H[B.materialIndex];if(tt&&tt.visible){let Q=w(b,tt,g,y);b.onBeforeShadow(s,b,A,S,k,Q,B),s.renderBufferDirect(S,null,k,Q,b,B),b.onAfterShadow(s,b,A,S,k,Q,B)}}}else if(H.visible){let O=w(b,H,g,y);b.onBeforeShadow(s,b,A,S,k,O,null),s.renderBufferDirect(S,null,k,O,b,null),b.onAfterShadow(s,b,A,S,k,O,null)}}let L=b.children;for(let k=0,H=L.length;k<H;k++)_(L[k],A,S,g,y)}function C(b){b.target.removeEventListener("dispose",C);for(let S in c){let g=c[S],y=b.target.uuid;y in g&&(g[y].dispose(),delete g[y])}}}var Cx={[La]:Da,[Na]:Fa,[Ua]:Ba,[ss]:Oa,[Da]:La,[Fa]:Na,[Ba]:Ua,[Oa]:ss};function Ix(s,t){function e(){let W=!1,_t=new Qt,et=null,lt=new Qt(0,0,0,0);return{setMask:function(bt){et!==bt&&!W&&(s.colorMask(bt,bt,bt,bt),et=bt)},setLocked:function(bt){W=bt},setClear:function(bt,yt,Ht,ve,Fe){Fe===!0&&(bt*=ve,yt*=ve,Ht*=ve),_t.set(bt,yt,Ht,ve),lt.equals(_t)===!1&&(s.clearColor(bt,yt,Ht,ve),lt.copy(_t))},reset:function(){W=!1,et=null,lt.set(-1,0,0,0)}}}function n(){let W=!1,_t=!1,et=null,lt=null,bt=null;return{setReversed:function(yt){if(_t!==yt){let Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let ve=bt;bt=null,this.setClear(ve)}_t=yt},getReversed:function(){return _t},setTest:function(yt){yt?P(s.DEPTH_TEST):G(s.DEPTH_TEST)},setMask:function(yt){et!==yt&&!W&&(s.depthMask(yt),et=yt)},setFunc:function(yt){if(_t&&(yt=Cx[yt]),lt!==yt){switch(yt){case La:s.depthFunc(s.NEVER);break;case Da:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case Ua:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Fa:s.depthFunc(s.GREATER);break;case Ba:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=yt}},setLocked:function(yt){W=yt},setClear:function(yt){bt!==yt&&(_t&&(yt=1-yt),s.clearDepth(yt),bt=yt)},reset:function(){W=!1,et=null,lt=null,bt=null,_t=!1}}}function i(){let W=!1,_t=null,et=null,lt=null,bt=null,yt=null,Ht=null,ve=null,Fe=null;return{setTest:function(se){W||(se?P(s.STENCIL_TEST):G(s.STENCIL_TEST))},setMask:function(se){_t!==se&&!W&&(s.stencilMask(se),_t=se)},setFunc:function(se,fn,In){(et!==se||lt!==fn||bt!==In)&&(s.stencilFunc(se,fn,In),et=se,lt=fn,bt=In)},setOp:function(se,fn,In){(yt!==se||Ht!==fn||ve!==In)&&(s.stencilOp(se,fn,In),yt=se,Ht=fn,ve=In)},setLocked:function(se){W=se},setClear:function(se){Fe!==se&&(s.clearStencil(se),Fe=se)},reset:function(){W=!1,_t=null,et=null,lt=null,bt=null,yt=null,Ht=null,ve=null,Fe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,v=!1,m=null,p=null,M=null,w=null,_=null,C=null,b=null,A=new At(0,0,0),S=0,g=!1,y=null,E=null,L=null,k=null,H=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=V>=2);let tt=null,Q={},st=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),ht=new Qt().fromArray(st),Z=new Qt().fromArray(rt);function N(W,_t,et,lt){let bt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(W,yt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<et;Ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(_t+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return yt}let F={};F[s.TEXTURE_2D]=N(s.TEXTURE_2D,s.TEXTURE_2D,1),F[s.TEXTURE_CUBE_MAP]=N(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[s.TEXTURE_2D_ARRAY]=N(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),F[s.TEXTURE_3D]=N(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(ss),pt(!1),wt(rh),P(s.CULL_FACE),z(ln);function P(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function G(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function q(W,_t){return u[W]!==_t?(s.bindFramebuffer(W,_t),u[W]=_t,W===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_t),W===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function Y(W,_t){let et=d,lt=!1;if(W){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));let bt=W.textures;if(et.length!==bt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Ht=bt.length;yt<Ht;yt++)et[yt]=s.COLOR_ATTACHMENT0+yt;et.length=bt.length,lt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,lt=!0);lt&&s.drawBuffers(et)}function ot(W){return x!==W?(s.useProgram(W),x=W,!0):!1}let it={[zn]:s.FUNC_ADD,[Zf]:s.FUNC_SUBTRACT,[Kf]:s.FUNC_REVERSE_SUBTRACT};it[Jf]=s.MIN,it[jf]=s.MAX;let Rt={[$l]:s.ZERO,[Qs]:s.ONE,[Qf]:s.SRC_COLOR,[Ia]:s.SRC_ALPHA,[rd]:s.SRC_ALPHA_SATURATE,[id]:s.DST_COLOR,[ed]:s.DST_ALPHA,[td]:s.ONE_MINUS_SRC_COLOR,[Pa]:s.ONE_MINUS_SRC_ALPHA,[sd]:s.ONE_MINUS_DST_COLOR,[nd]:s.ONE_MINUS_DST_ALPHA,[od]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[cd]:s.ONE_MINUS_CONSTANT_ALPHA};function z(W,_t,et,lt,bt,yt,Ht,ve,Fe,se){if(W===ln){v===!0&&(G(s.BLEND),v=!1);return}if(v===!1&&(P(s.BLEND),v=!0),W!==Xl){if(W!==m||se!==g){if((p!==zn||_!==zn)&&(s.blendEquation(s.FUNC_ADD),p=zn,_=zn),se)switch(W){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yr:s.blendFunc(s.ONE,s.ONE);break;case oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ah:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}M=null,w=null,C=null,b=null,A.set(0,0,0),S=0,m=W,g=se}return}bt=bt||_t,yt=yt||et,Ht=Ht||lt,(_t!==p||bt!==_)&&(s.blendEquationSeparate(it[_t],it[bt]),p=_t,_=bt),(et!==M||lt!==w||yt!==C||Ht!==b)&&(s.blendFuncSeparate(Rt[et],Rt[lt],Rt[yt],Rt[Ht]),M=et,w=lt,C=yt,b=Ht),(ve.equals(A)===!1||Fe!==S)&&(s.blendColor(ve.r,ve.g,ve.b,Fe),A.copy(ve),S=Fe),m=W,g=!1}function mt(W,_t){W.side===Ge?G(s.CULL_FACE):P(s.CULL_FACE);let et=W.side===Ze;_t&&(et=!et),pt(et),W.blending===ts&&W.transparent===!1?z(ln):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let lt=W.stencilWrite;a.setTest(lt),lt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):G(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){y!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),y=W)}function wt(W){W!==qf?(P(s.CULL_FACE),W!==E&&(W===rh?s.cullFace(s.BACK):W===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):G(s.CULL_FACE),E=W}function vt(W){W!==L&&(U&&s.lineWidth(W),L=W)}function kt(W,_t,et){W?(P(s.POLYGON_OFFSET_FILL),(k!==_t||H!==et)&&(s.polygonOffset(_t,et),k=_t,H=et)):G(s.POLYGON_OFFSET_FILL)}function dt(W){W?P(s.SCISSOR_TEST):G(s.SCISSOR_TEST)}function I(W){W===void 0&&(W=s.TEXTURE0+O-1),tt!==W&&(s.activeTexture(W),tt=W)}function T(W,_t,et){et===void 0&&(tt===null?et=s.TEXTURE0+O-1:et=tt);let lt=Q[et];lt===void 0&&(lt={type:void 0,texture:void 0},Q[et]=lt),(lt.type!==W||lt.texture!==_t)&&(tt!==et&&(s.activeTexture(et),tt=et),s.bindTexture(W,_t||F[W]),lt.type=W,lt.texture=_t)}function K(){let W=Q[tt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(W){ht.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ht.copy(W))}function Tt(W){Z.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function Kt(W,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let lt=et.get(W);lt===void 0&&(lt=s.getUniformBlockIndex(_t,W.name),et.set(W,lt))}function Wt(W,_t){let lt=c.get(_t).get(W);l.get(_t)!==lt&&(s.uniformBlockBinding(_t,lt,W.__bindingPointIndex),l.set(_t,lt))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,Q={},u={},f=new WeakMap,d=[],x=null,v=!1,m=null,p=null,M=null,w=null,_=null,C=null,b=null,A=new At(0,0,0),S=0,g=!1,y=null,E=null,L=null,k=null,H=null,ht.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:G,bindFramebuffer:q,drawBuffers:Y,useProgram:ot,setBlending:z,setMaterial:mt,setFlipSided:pt,setCullFace:wt,setLineWidth:vt,setPolygonOffset:kt,setScissorTest:dt,activeTexture:I,bindTexture:T,unbindTexture:K,compressedTexImage2D:at,compressedTexImage3D:ct,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:Yt,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:Ct,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Bt,viewport:Tt,reset:ae}}function su(s,t,e,n){let i=Px(n);switch(e){case Iu:return s*t;case Lu:return s*t;case Du:return s*t*2;case nc:return s*t/i.components*i.byteLength;case ic:return s*t/i.components*i.byteLength;case Nu:return s*t*2/i.components*i.byteLength;case sc:return s*t*2/i.components*i.byteLength;case Pu:return s*t*3/i.components*i.byteLength;case Ye:return s*t*4/i.components*i.byteLength;case rc:return s*t*4/i.components*i.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(s,16)*Math.max(t,8)/4;case za:case Va:return Math.max(s,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qr:case al:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uu:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Px(s){switch(s){case Wn:case Au:return{byteLength:1,components:1};case Gs:case Ru:case Ne:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Pi:case Ql:case Pe:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Lx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,T){return d?new OffscreenCanvas(I,T):Ws("canvas")}function v(I,T,K){let at=1,ct=dt(I);if((ct.width>K||ct.height>K)&&(at=K/Math.max(ct.width,ct.height)),at<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let nt=Math.floor(at*ct.width),Ct=Math.floor(at*ct.height);u===void 0&&(u=x(nt,Ct));let xt=T?x(nt,Ct):u;return xt.width=nt,xt.height=Ct,xt.getContext("2d").drawImage(I,0,0,nt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Ct+")."),xt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,T,K,at,ct=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=T;if(T===s.RED&&(K===s.FLOAT&&(nt=s.R32F),K===s.HALF_FLOAT&&(nt=s.R16F),K===s.UNSIGNED_BYTE&&(nt=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(nt=s.R8UI),K===s.UNSIGNED_SHORT&&(nt=s.R16UI),K===s.UNSIGNED_INT&&(nt=s.R32UI),K===s.BYTE&&(nt=s.R8I),K===s.SHORT&&(nt=s.R16I),K===s.INT&&(nt=s.R32I)),T===s.RG&&(K===s.FLOAT&&(nt=s.RG32F),K===s.HALF_FLOAT&&(nt=s.RG16F),K===s.UNSIGNED_BYTE&&(nt=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(nt=s.RG8UI),K===s.UNSIGNED_SHORT&&(nt=s.RG16UI),K===s.UNSIGNED_INT&&(nt=s.RG32UI),K===s.BYTE&&(nt=s.RG8I),K===s.SHORT&&(nt=s.RG16I),K===s.INT&&(nt=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),K===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),K===s.UNSIGNED_INT&&(nt=s.RGB32UI),K===s.BYTE&&(nt=s.RGB8I),K===s.SHORT&&(nt=s.RGB16I),K===s.INT&&(nt=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),K===s.UNSIGNED_INT&&(nt=s.RGBA32UI),K===s.BYTE&&(nt=s.RGBA8I),K===s.SHORT&&(nt=s.RGBA16I),K===s.INT&&(nt=s.RGBA32I)),T===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),T===s.RGBA){let Ct=ct?Io:qt.getTransfer(at);K===s.FLOAT&&(nt=s.RGBA32F),K===s.HALF_FLOAT&&(nt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(nt=Ct===ne?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(I,T){let K;return I?T===null||T===Pi||T===ls?K=s.DEPTH24_STENCIL8:T===Pe?K=s.DEPTH32F_STENCIL8:T===Gs&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===ls?K=s.DEPTH_COMPONENT24:T===Pe?K=s.DEPTH_COMPONENT32F:T===Gs&&(K=s.DEPTH_COMPONENT16),K}function C(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ze&&I.minFilter!==xe?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function b(I){let T=I.target;T.removeEventListener("dispose",b),S(T),T.isVideoTexture&&h.delete(T)}function A(I){let T=I.target;T.removeEventListener("dispose",A),y(T)}function S(I){let T=n.get(I);if(T.__webglInit===void 0)return;let K=I.source,at=f.get(K);if(at){let ct=at[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&g(I),Object.keys(at).length===0&&f.delete(K)}n.remove(I)}function g(I){let T=n.get(I);s.deleteTexture(T.__webglTexture);let K=I.source,at=f.get(K);delete at[T.__cacheKey],o.memory.textures--}function y(I){let T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let ct=0;ct<T.__webglFramebuffer[at].length;ct++)s.deleteFramebuffer(T.__webglFramebuffer[at][ct]);else s.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)s.deleteFramebuffer(T.__webglFramebuffer[at]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let K=I.textures;for(let at=0,ct=K.length;at<ct;at++){let nt=n.get(K[at]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(K[at])}n.remove(I)}let E=0;function L(){E=0}function k(){let I=E;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),E+=1,I}function H(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function O(I,T){let K=n.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){let at=I.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,I,T);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function U(I,T){let K=n.get(I);if(I.version>0&&K.__version!==I.version){Z(K,I,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function V(I,T){let K=n.get(I);if(I.version>0&&K.__version!==I.version){Z(K,I,T);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function B(I,T){let K=n.get(I);if(I.version>0&&K.__version!==I.version){N(K,I,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}let tt={[Qe]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Vs]:s.MIRRORED_REPEAT},Q={[ze]:s.NEAREST,[jl]:s.NEAREST_MIPMAP_NEAREST,[ji]:s.NEAREST_MIPMAP_LINEAR,[xe]:s.LINEAR,[Bs]:s.LINEAR_MIPMAP_NEAREST,[vn]:s.LINEAR_MIPMAP_LINEAR},st={[_d]:s.NEVER,[wd]:s.ALWAYS,[vd]:s.LESS,[Bu]:s.LEQUAL,[yd]:s.EQUAL,[bd]:s.GEQUAL,[Md]:s.GREATER,[Sd]:s.NOTEQUAL};function rt(I,T){if(T.type===Pe&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xe||T.magFilter===Bs||T.magFilter===ji||T.magFilter===vn||T.minFilter===xe||T.minFilter===Bs||T.minFilter===ji||T.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,tt[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,tt[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,tt[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Q[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,st[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ze||T.minFilter!==ji&&T.minFilter!==vn||T.type===Pe&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ht(I,T){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",b));let at=T.source,ct=f.get(at);ct===void 0&&(ct={},f.set(at,ct));let nt=H(T);if(nt!==I.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ct[nt].usedTimes++;let Ct=ct[I.__cacheKey];Ct!==void 0&&(ct[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&g(T)),I.__cacheKey=nt,I.__webglTexture=ct[nt].texture}return K}function Z(I,T,K){let at=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=s.TEXTURE_3D);let ct=ht(I,T),nt=T.source;e.bindTexture(at,I.__webglTexture,s.TEXTURE0+K);let Ct=n.get(nt);if(nt.version!==Ct.__version||ct===!0){e.activeTexture(s.TEXTURE0+K);let xt=qt.getPrimaries(qt.workingColorSpace),St=T.colorSpace===ii?null:qt.getPrimaries(T.colorSpace),Yt=T.colorSpace===ii||xt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ut=v(T.image,!1,i.maxTextureSize);ut=kt(T,ut);let Et=r.convert(T.format,T.colorSpace),Ft=r.convert(T.type),Bt=w(T.internalFormat,Et,Ft,T.colorSpace,T.isVideoTexture);rt(at,T);let Tt,Kt=T.mipmaps,Wt=T.isVideoTexture!==!0,ae=Ct.__version===void 0||ct===!0,W=nt.dataReady,_t=C(T,ut);if(T.isDepthTexture)Bt=_(T.format===cs,T.type),ae&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Et,Ft,null));else if(T.isDataTexture)if(Kt.length>0){Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,_t,Bt,Kt[0].width,Kt[0].height);for(let et=0,lt=Kt.length;et<lt;et++)Tt=Kt[et],Wt?W&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(s.TEXTURE_2D,et,Bt,Tt.width,Tt.height,0,Et,Ft,Tt.data);T.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(s.TEXTURE_2D,_t,Bt,ut.width,ut.height),W&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,Et,Ft,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Et,Ft,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Bt,Kt[0].width,Kt[0].height,ut.depth);for(let et=0,lt=Kt.length;et<lt;et++)if(Tt=Kt[et],T.format!==Ye)if(Et!==null)if(Wt){if(W)if(T.layerUpdates.size>0){let bt=su(Tt.width,Tt.height,T.format,T.type);for(let yt of T.layerUpdates){let Ht=Tt.data.subarray(yt*bt/Tt.data.BYTES_PER_ELEMENT,(yt+1)*bt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,yt,Tt.width,Tt.height,1,Et,Ht)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,ut.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,Bt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?W&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,ut.depth,Et,Ft,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,Bt,Tt.width,Tt.height,ut.depth,0,Et,Ft,Tt.data)}else{Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,_t,Bt,Kt[0].width,Kt[0].height);for(let et=0,lt=Kt.length;et<lt;et++)Tt=Kt[et],T.format!==Ye?Et!==null?Wt?W&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?W&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Tt.width,Tt.height,Et,Ft,Tt.data):e.texImage2D(s.TEXTURE_2D,et,Bt,Tt.width,Tt.height,0,Et,Ft,Tt.data)}else if(T.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,Bt,ut.width,ut.height,ut.depth),W)if(T.layerUpdates.size>0){let et=su(ut.width,ut.height,T.format,T.type);for(let lt of T.layerUpdates){let bt=ut.data.subarray(lt*et/ut.data.BYTES_PER_ELEMENT,(lt+1)*et/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,Et,Ft,bt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,Ft,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,Et,Ft,ut.data);else if(T.isData3DTexture)Wt?(ae&&e.texStorage3D(s.TEXTURE_3D,_t,Bt,ut.width,ut.height,ut.depth),W&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,Ft,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,Et,Ft,ut.data);else if(T.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(s.TEXTURE_2D,_t,Bt,ut.width,ut.height);else{let et=ut.width,lt=ut.height;for(let bt=0;bt<_t;bt++)e.texImage2D(s.TEXTURE_2D,bt,Bt,et,lt,0,Et,Ft,null),et>>=1,lt>>=1}}else if(Kt.length>0){if(Wt&&ae){let et=dt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,_t,Bt,et.width,et.height)}for(let et=0,lt=Kt.length;et<lt;et++)Tt=Kt[et],Wt?W&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Et,Ft,Tt):e.texImage2D(s.TEXTURE_2D,et,Bt,Et,Ft,Tt);T.generateMipmaps=!1}else if(Wt){if(ae){let et=dt(ut);e.texStorage2D(s.TEXTURE_2D,_t,Bt,et.width,et.height)}W&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ft,ut)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Et,Ft,ut);m(T)&&p(at),Ct.__version=nt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function N(I,T,K){if(T.image.length!==6)return;let at=ht(I,T),ct=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);let nt=n.get(ct);if(ct.version!==nt.__version||at===!0){e.activeTexture(s.TEXTURE0+K);let Ct=qt.getPrimaries(qt.workingColorSpace),xt=T.colorSpace===ii?null:qt.getPrimaries(T.colorSpace),St=T.colorSpace===ii||Ct===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,Et=[];for(let lt=0;lt<6;lt++)!Yt&&!ut?Et[lt]=v(T.image[lt],!0,i.maxCubemapSize):Et[lt]=ut?T.image[lt].image:T.image[lt],Et[lt]=kt(T,Et[lt]);let Ft=Et[0],Bt=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type),Kt=w(T.internalFormat,Bt,Tt,T.colorSpace),Wt=T.isVideoTexture!==!0,ae=nt.__version===void 0||at===!0,W=ct.dataReady,_t=C(T,Ft);rt(s.TEXTURE_CUBE_MAP,T);let et;if(Yt){Wt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Kt,Ft.width,Ft.height);for(let lt=0;lt<6;lt++){et=Et[lt].mipmaps;for(let bt=0;bt<et.length;bt++){let yt=et[bt];T.format!==Ye?Bt!==null?Wt?W&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,Kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?W&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,yt.width,yt.height,Bt,Tt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,Kt,yt.width,yt.height,0,Bt,Tt,yt.data)}}}else{if(et=T.mipmaps,Wt&&ae){et.length>0&&_t++;let lt=dt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){Wt?W&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Et[lt].width,Et[lt].height,Bt,Tt,Et[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Et[lt].width,Et[lt].height,0,Bt,Tt,Et[lt].data);for(let bt=0;bt<et.length;bt++){let Ht=et[bt].image[lt].image;Wt?W&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Ht.width,Ht.height,Bt,Tt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,Kt,Ht.width,Ht.height,0,Bt,Tt,Ht.data)}}else{Wt?W&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Tt,Et[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Bt,Tt,Et[lt]);for(let bt=0;bt<et.length;bt++){let yt=et[bt];Wt?W&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Bt,Tt,yt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,Kt,Bt,Tt,yt.image[lt])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),nt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function F(I,T,K,at,ct,nt){let Ct=r.convert(K.format,K.colorSpace),xt=r.convert(K.type),St=w(K.internalFormat,Ct,xt,K.colorSpace),Yt=n.get(T),ut=n.get(K);if(ut.__renderTarget=T,!Yt.__hasExternalTextures){let Et=Math.max(1,T.width>>nt),Ft=Math.max(1,T.height>>nt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,St,Et,Ft,T.depth,0,Ct,xt,null):e.texImage2D(ct,nt,St,Et,Ft,0,Ct,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,ct,ut.__webglTexture,0,pt(T)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,ct,ut.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function P(I,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){let at=T.depthTexture,ct=at&&at.isDepthTexture?at.type:null,nt=_(T.stencilBuffer,ct),Ct=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=pt(T);wt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,nt,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,nt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,nt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,I)}else{let at=T.textures;for(let ct=0;ct<at.length;ct++){let nt=at[ct],Ct=r.convert(nt.format,nt.colorSpace),xt=r.convert(nt.type),St=w(nt.internalFormat,Ct,xt,nt.colorSpace),Yt=pt(T);K&&wt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,St,T.width,T.height):wt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,St,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,St,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function G(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(T.depthTexture);at.__renderTarget=T,(!at.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);let ct=at.__webglTexture,nt=pt(T);if(T.depthTexture.format===es)wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(T.depthTexture.format===cs)wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function q(I){let T=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let at=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){let ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",ct)};at.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=at}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");G(T.__webglFramebuffer,I)}else if(K){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=s.createRenderbuffer(),P(T.__webglDepthbuffer[at],I,!1);else{let ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),P(T.__webglDepthbuffer,I,!1);else{let at=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(I,T,K){let at=n.get(I);T!==void 0&&F(at.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&q(I)}function ot(I){let T=I.texture,K=n.get(I),at=n.get(T);I.addEventListener("dispose",A);let ct=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Ct=ct.length>1;if(Ct||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=T.version,o.memory.textures++),nt){K.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[xt]=[];for(let St=0;St<T.mipmaps.length;St++)K.__webglFramebuffer[xt][St]=s.createFramebuffer()}else K.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let xt=0;xt<T.mipmaps.length;xt++)K.__webglFramebuffer[xt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let xt=0,St=ct.length;xt<St;xt++){let Yt=n.get(ct[xt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&wt(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){let St=ct[xt];K.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[xt]);let Yt=r.convert(St.format,St.colorSpace),ut=r.convert(St.type),Et=w(St.internalFormat,Yt,ut,St.colorSpace,I.isXRRenderTarget===!0),Ft=pt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Et,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,K.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),P(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),rt(s.TEXTURE_CUBE_MAP,T);for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)F(K.__webglFramebuffer[xt][St],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else F(K.__webglFramebuffer[xt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let xt=0,St=ct.length;xt<St;xt++){let Yt=ct[xt],ut=n.get(Yt);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),rt(s.TEXTURE_2D,Yt),F(K.__webglFramebuffer,I,Yt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,at.__webglTexture),rt(xt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)F(K.__webglFramebuffer[St],I,T,s.COLOR_ATTACHMENT0,xt,St);else F(K.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,xt,0);m(T)&&p(xt),e.unbindTexture()}I.depthBuffer&&q(I)}function it(I){let T=I.textures;for(let K=0,at=T.length;K<at;K++){let ct=T[K];if(m(ct)){let nt=M(I),Ct=n.get(ct).__webglTexture;e.bindTexture(nt,Ct),p(nt),e.unbindTexture()}}}let Rt=[],z=[];function mt(I){if(I.samples>0){if(wt(I)===!1){let T=I.textures,K=I.width,at=I.height,ct=s.COLOR_BUFFER_BIT,nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(I),xt=T.length>1;if(xt)for(let St=0;St<T.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<T.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let Yt=n.get(T[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,K,at,0,0,K,at,ct,s.NEAREST),l===!0&&(Rt.length=0,z.length=0,Rt.push(s.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Rt.push(nt),z.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<T.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);let Yt=n.get(T[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(I){return Math.min(i.maxSamples,I.samples)}function wt(I){let T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function kt(I,T){let K=I.colorSpace,at=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==be&&K!==ii&&(qt.getTransfer(K)===ne?(at!==Ye||ct!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Y,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=F,this.useMultisampledRTT=wt}function Dx(s,t){function e(n,i=ii){let r,o=qt.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.BYTE;if(n===Ru)return s.SHORT;if(n===Gs)return s.UNSIGNED_SHORT;if(n===Ql)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===Pe)return s.FLOAT;if(n===Ne)return s.HALF_FLOAT;if(n===Iu)return s.ALPHA;if(n===Pu)return s.RGB;if(n===Ye)return s.RGBA;if(n===Lu)return s.LUMINANCE;if(n===Du)return s.LUMINANCE_ALPHA;if(n===es)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===nc)return s.RED;if(n===ic)return s.RED_INTEGER;if(n===Nu)return s.RG;if(n===sc)return s.RG_INTEGER;if(n===rc)return s.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===$r)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ha||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===al||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uu||n===cl||n===hl||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Tl=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Le=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,v=new Al,m=e.getContextAttributes(),p=null,M=null,w=[],_=[],C=new Ut,b=null,A=new Te;A.viewport=new Qt;let S=new Te;S.viewport=new Qt;let g=[A,S],y=new Tl,E=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let N=w[Z];return N===void 0&&(N=new Hs,w[Z]=N),N.getTargetRaySpace()},this.getControllerGrip=function(Z){let N=w[Z];return N===void 0&&(N=new Hs,w[Z]=N),N.getGripSpace()},this.getHand=function(Z){let N=w[Z];return N===void 0&&(N=new Hs,w[Z]=N),N.getHandSpace()};function k(Z){let N=_.indexOf(Z.inputSource);if(N===-1)return;let F=w[N];F!==void 0&&(F.update(Z.inputSource,Z.frame,c||o),F.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",O);for(let Z=0;Z<w.length;Z++){let N=_[Z];N!==null&&(_[Z]=null,w[Z].disconnect(N))}E=null,L=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,M=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",H),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let N={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ue(d.framebufferWidth,d.framebufferHeight,{format:Ye,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let N=null,F=null,P=null;m.depth&&(P=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=m.stencil?cs:es,F=m.stencil?ls:Pi);let G={colorFormat:e.RGBA8,depthFormat:P,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(G),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ue(f.textureWidth,f.textureHeight,{format:Ye,type:Wn,depthTexture:new io(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(Z){for(let N=0;N<Z.removed.length;N++){let F=Z.removed[N],P=_.indexOf(F);P>=0&&(_[P]=null,w[P].disconnect(F))}for(let N=0;N<Z.added.length;N++){let F=Z.added[N],P=_.indexOf(F);if(P===-1){for(let q=0;q<w.length;q++)if(q>=_.length){_.push(F),P=q;break}else if(_[q]===null){_[q]=F,P=q;break}if(P===-1)break}let G=w[P];G&&G.connect(F)}}let U=new D,V=new D;function B(Z,N,F){U.setFromMatrixPosition(N.matrixWorld),V.setFromMatrixPosition(F.matrixWorld);let P=U.distanceTo(V),G=N.projectionMatrix.elements,q=F.projectionMatrix.elements,Y=G[14]/(G[10]-1),ot=G[14]/(G[10]+1),it=(G[9]+1)/G[5],Rt=(G[9]-1)/G[5],z=(G[8]-1)/G[0],mt=(q[8]+1)/q[0],pt=Y*z,wt=Y*mt,vt=P/(-z+mt),kt=vt*-z;if(N.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(kt),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),G[10]===-1)Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let dt=Y+vt,I=ot+vt,T=pt-kt,K=wt+(P-kt),at=it*ot/I*dt,ct=Rt*ot/I*dt;Z.projectionMatrix.makePerspective(T,K,at,ct,dt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,N){N===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(N.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let N=Z.near,F=Z.far;v.texture!==null&&(v.depthNear>0&&(N=v.depthNear),v.depthFar>0&&(F=v.depthFar)),y.near=S.near=A.near=N,y.far=S.far=A.far=F,(E!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,L=y.far),A.layers.mask=Z.layers.mask|2,S.layers.mask=Z.layers.mask|4,y.layers.mask=A.layers.mask|S.layers.mask;let P=Z.parent,G=y.cameras;tt(y,P);for(let q=0;q<G.length;q++)tt(G[q],P);G.length===2?B(y,A,S):y.projectionMatrix.copy(A.projectionMatrix),Q(Z,y,P)};function Q(Z,N,F){F===null?Z.matrix.copy(N.matrixWorld):(Z.matrix.copy(F.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(N.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let st=null;function rt(Z,N){if(h=N.getViewerPose(c||o),x=N,h!==null){let F=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let P=!1;F.length!==y.cameras.length&&(y.cameras.length=0,P=!0);for(let q=0;q<F.length;q++){let Y=F[q],ot=null;if(d!==null)ot=d.getViewport(Y);else{let Rt=u.getViewSubImage(f,Y);ot=Rt.viewport,q===0&&(t.setRenderTargetTextures(M,Rt.colorTexture,f.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(M))}let it=g[q];it===void 0&&(it=new Te,it.layers.enable(q),it.viewport=new Qt,g[q]=it),it.matrix.fromArray(Y.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Y.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ot.x,ot.y,ot.width,ot.height),q===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),P===!0&&y.cameras.push(it)}let G=i.enabledFeatures;if(G&&G.includes("depth-sensing")){let q=u.getDepthInformation(F[0]);q&&q.isValid&&q.texture&&v.init(t,q,i.renderState)}}for(let F=0;F<w.length;F++){let P=_[F],G=w[F];P!==null&&G!==void 0&&G.update(P,N,c||o)}st&&st(Z,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),x=null}let ht=new Vu;ht.setAnimationLoop(rt),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}},Ai=new cn,Fx=new Ot;function Bx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,Ai.copy(_),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Ai)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let _=w.program;n.uniformBlockBinding(M,_)}function c(M,w){let _=i[M.id];_===void 0&&(x(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));let C=w.program;n.updateUBOMapping(M,C);let b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){let w=u();M.__bindingPointIndex=w;let _=s.createBuffer(),C=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let w=i[M.id],_=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let b=0,A=_.length;b<A;b++){let S=Array.isArray(_[b])?_[b]:[_[b]];for(let g=0,y=S.length;g<y;g++){let E=S[g];if(d(E,b,g,C)===!0){let L=E.__offset,k=Array.isArray(E.value)?E.value:[E.value],H=0;for(let O=0;O<k.length;O++){let U=k[O],V=v(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,L+H,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,w,_,C){let b=M.value,A=w+"_"+_;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{let S=C[A];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return C[A]=b,!0}else if(S.equals(b)===!1)return S.copy(b),!0}return!1}function x(M){let w=M.uniforms,_=0,C=16;for(let A=0,S=w.length;A<S;A++){let g=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,E=g.length;y<E;y++){let L=g[y],k=Array.isArray(L.value)?L.value:[L.value];for(let H=0,O=k.length;H<O;H++){let U=k[H],V=v(U),B=_%C,tt=B%V.boundary,Q=B+tt;_+=tt,Q!==0&&C-Q<V.storage&&(_+=C-Q),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=V.storage}}}let b=_%C;return b>0&&(_+=C-b),M.__size=_,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var so=class{constructor(t={}){let{canvas:e=Hd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,C=!1,b=0,A=0,S=null,g=-1,y=null,E=new Qt,L=new Qt,k=null,H=new At(0),O=0,U=e.width,V=e.height,B=1,tt=null,Q=null,st=new Qt(0,0,U,V),rt=new Qt(0,0,U,V),ht=!1,Z=new Xs,N=!1,F=!1,P=new Ot,G=new Ot,q=new D,Y=new Qt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function Rt(){return S===null?B:1}let z=n;function mt(R,X){return e.getContext(R,X)}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),z===null){let X="webgl2";if(z=mt(X,R),z===null)throw mt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,wt,vt,kt,dt,I,T,K,at,ct,nt,Ct,xt,St,Yt,ut,Et,Ft,Bt,Tt,Kt,Wt,ae,W;function _t(){pt=new e0(z),pt.init(),Wt=new Dx(z,pt),wt=new Zg(z,pt,t,Wt),vt=new Ix(z,pt),wt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),kt=new s0(z),dt=new xx,I=new Lx(z,pt,vt,dt,wt,Wt,kt),T=new Jg(_),K=new t0(_),at=new up(z),ae=new qg(z,at),ct=new n0(z,at,kt,ae),nt=new o0(z,ct,at,kt),Bt=new r0(z,wt,I),ut=new Kg(dt),Ct=new gx(_,T,K,pt,wt,ae,ut),xt=new Bx(_,dt),St=new vx,Yt=new Ex(pt),Ft=new $g(_,T,K,vt,nt,d,l),Et=new Rx(_,nt,wt),W=new kx(z,kt,wt,vt),Tt=new Yg(z,pt,kt),Kt=new i0(z,pt,kt),kt.programs=Ct.programs,_.capabilities=wt,_.extensions=pt,_.properties=dt,_.renderLists=St,_.shadowMap=Et,_.state=vt,_.info=kt}_t();let et=new Rl(_,z);this.xr=et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(U,V,!1))},this.getSize=function(R){return R.set(U,V)},this.setSize=function(R,X,J=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,V=X,e.width=Math.floor(R*B),e.height=Math.floor(X*B),J===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(U*B,V*B).floor()},this.setDrawingBufferSize=function(R,X,J){U=R,V=X,B=J,e.width=Math.floor(R*J),e.height=Math.floor(X*J),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,X,J,j){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,X,J,j),vt.viewport(E.copy(st).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,X,J,j){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,X,J,j),vt.scissor(L.copy(rt).multiplyScalar(B).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){vt.setScissorTest(ht=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(R=!0,X=!0,J=!0){let j=0;if(R){let $=!1;if(S!==null){let ft=S.texture.format;$=ft===rc||ft===sc||ft===ic}if($){let ft=S.texture.type,Mt=ft===Wn||ft===Pi||ft===Gs||ft===ls||ft===tc||ft===ec,It=Ft.getClearColor(),Pt=Ft.getClearAlpha(),zt=It.r,Vt=It.g,Lt=It.b;Mt?(x[0]=zt,x[1]=Vt,x[2]=Lt,x[3]=Pt,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=zt,v[1]=Vt,v[2]=Lt,v[3]=Pt,z.clearBufferiv(z.COLOR,0,v))}else j|=z.COLOR_BUFFER_BIT}X&&(j|=z.DEPTH_BUFFER_BIT),J&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),St.dispose(),Yt.dispose(),dt.dispose(),T.dispose(),K.dispose(),nt.dispose(),ae.dispose(),W.dispose(),Ct.dispose(),et.dispose(),et.removeEventListener("sessionstart",Kc),et.removeEventListener("sessionend",Jc),Mi.stop()};function lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=kt.autoReset,X=Et.enabled,J=Et.autoUpdate,j=Et.needsUpdate,$=Et.type;_t(),kt.autoReset=R,Et.enabled=X,Et.autoUpdate=J,Et.needsUpdate=j,Et.type=$}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){let X=R.target;X.removeEventListener("dispose",Ht),ve(X)}function ve(R){Fe(R),dt.remove(R)}function Fe(R){let X=dt.get(R).programs;X!==void 0&&(X.forEach(function(J){Ct.releaseProgram(J)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,J,j,$,ft){X===null&&(X=ot);let Mt=$.isMesh&&$.matrixWorld.determinant()<0,It=Of(R,X,J,j,$);vt.setMaterial(j,Mt);let Pt=J.index,zt=1;if(j.wireframe===!0){if(Pt=ct.getWireframeAttribute(J),Pt===void 0)return;zt=2}let Vt=J.drawRange,Lt=J.attributes.position,jt=Vt.start*zt,le=(Vt.start+Vt.count)*zt;ft!==null&&(jt=Math.max(jt,ft.start*zt),le=Math.min(le,(ft.start+ft.count)*zt)),Pt!==null?(jt=Math.max(jt,0),le=Math.min(le,Pt.count)):Lt!=null&&(jt=Math.max(jt,0),le=Math.min(le,Lt.count));let he=le-jt;if(he<0||he===1/0)return;ae.setup($,j,It,J,Pt);let qe,te=Tt;if(Pt!==null&&(qe=at.get(Pt),te=Kt,te.setIndex(qe)),$.isMesh)j.wireframe===!0?(vt.setLineWidth(j.wireframeLinewidth*Rt()),te.setMode(z.LINES)):te.setMode(z.TRIANGLES);else if($.isLine){let Nt=j.linewidth;Nt===void 0&&(Nt=1),vt.setLineWidth(Nt*Rt()),$.isLineSegments?te.setMode(z.LINES):$.isLineLoop?te.setMode(z.LINE_LOOP):te.setMode(z.LINE_STRIP)}else $.isPoints?te.setMode(z.POINTS):$.isSprite&&te.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)te.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))te.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Nt=$._multiDrawStarts,Pn=$._multiDrawCounts,ee=$._multiDrawCount,dn=Pt?at.get(Pt).bytesPerElement:1,Oi=dt.get(j).currentProgram.getUniforms();for(let Ke=0;Ke<ee;Ke++)Oi.setValue(z,"_gl_DrawID",Ke),te.render(Nt[Ke]/dn,Pn[Ke])}else if($.isInstancedMesh)te.renderInstances(jt,he,$.count);else if(J.isInstancedBufferGeometry){let Nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pn=Math.min(J.instanceCount,Nt);te.renderInstances(jt,he,Pn)}else te.render(jt,he)};function se(R,X,J){R.transparent===!0&&R.side===Ge&&R.forceSinglePass===!1?(R.side=Ze,R.needsUpdate=!0,pr(R,X,J),R.side=bn,R.needsUpdate=!0,pr(R,X,J),R.side=Ge):pr(R,X,J)}this.compile=function(R,X,J=null){J===null&&(J=R),p=Yt.get(J),p.init(X),w.push(p),J.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),R!==J&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let j=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ft=$.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let It=ft[Mt];se(It,J,$),j.add(It)}else se(ft,J,$),j.add(ft)}),w.pop(),p=null,j},this.compileAsync=function(R,X,J=null){let j=this.compile(R,X,J);return new Promise($=>{function ft(){if(j.forEach(function(Mt){dt.get(Mt).currentProgram.isReady()&&j.delete(Mt)}),j.size===0){$(R);return}setTimeout(ft,10)}pt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let fn=null;function In(R){fn&&fn(R)}function Kc(){Mi.stop()}function Jc(){Mi.start()}let Mi=new Vu;Mi.setAnimationLoop(In),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){fn=R,et.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},et.addEventListener("sessionstart",Kc),et.addEventListener("sessionend",Jc),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(X),X=et.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,X,S),p=Yt.get(R,w.length),p.init(X),w.push(p),G.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(G),F=this.localClippingEnabled,N=ut.init(this.clippingPlanes,F),m=St.get(R,M.length),m.init(),M.push(m),et.enabled===!0&&et.isPresenting===!0){let ft=_.xr.getDepthSensingMesh();ft!==null&&Yo(ft,X,-1/0,_.sortObjects)}Yo(R,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,Q),it=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,it&&Ft.addToRenderList(m,R),this.info.render.frame++,N===!0&&ut.beginShadows();let J=p.state.shadowsArray;Et.render(J,R,X),N===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,$=m.transmissive;if(p.setupLights(),X.isArrayCamera){let ft=X.cameras;if($.length>0)for(let Mt=0,It=ft.length;Mt<It;Mt++){let Pt=ft[Mt];Qc(j,$,R,Pt)}it&&Ft.render(R);for(let Mt=0,It=ft.length;Mt<It;Mt++){let Pt=ft[Mt];jc(m,R,Pt,Pt.viewport)}}else $.length>0&&Qc(j,$,R,X),it&&Ft.render(R),jc(m,R,X);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(_,R,X),ae.resetDefaultState(),g=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],N===!0&&ut.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Yo(R,X,J,j){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){j&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(G);let Mt=nt.update(R),It=R.material;It.visible&&m.push(R,Mt,It,J,Y.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){let Mt=nt.update(R),It=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Y.copy(R.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Y.copy(Mt.boundingSphere.center)),Y.applyMatrix4(R.matrixWorld).applyMatrix4(G)),Array.isArray(It)){let Pt=Mt.groups;for(let zt=0,Vt=Pt.length;zt<Vt;zt++){let Lt=Pt[zt],jt=It[Lt.materialIndex];jt&&jt.visible&&m.push(R,Mt,jt,J,Y.z,Lt)}}else It.visible&&m.push(R,Mt,It,J,Y.z,null)}}let ft=R.children;for(let Mt=0,It=ft.length;Mt<It;Mt++)Yo(ft[Mt],X,J,j)}function jc(R,X,J,j){let $=R.opaque,ft=R.transmissive,Mt=R.transparent;p.setupLightsView(J),N===!0&&ut.setGlobalState(_.clippingPlanes,J),j&&vt.viewport(E.copy(j)),$.length>0&&dr($,X,J),ft.length>0&&dr(ft,X,J),Mt.length>0&&dr(Mt,X,J),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Qc(R,X,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Ue(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ne:Wn,minFilter:vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let ft=p.state.transmissionRenderTarget[j.id],Mt=j.viewport||E;ft.setSize(Mt.z,Mt.w);let It=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(H),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),it&&Ft.render(J);let Pt=_.toneMapping;_.toneMapping=ri;let zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),N===!0&&ut.setGlobalState(_.clippingPlanes,j),dr(R,J,j),I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Lt=0,jt=X.length;Lt<jt;Lt++){let le=X[Lt],he=le.object,qe=le.geometry,te=le.material,Nt=le.group;if(te.side===Ge&&he.layers.test(j.layers)){let Pn=te.side;te.side=Ze,te.needsUpdate=!0,th(he,J,j,qe,te,Nt),te.side=Pn,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft))}_.setRenderTarget(It),_.setClearColor(H,O),zt!==void 0&&(j.viewport=zt),_.toneMapping=Pt}function dr(R,X,J){let j=X.isScene===!0?X.overrideMaterial:null;for(let $=0,ft=R.length;$<ft;$++){let Mt=R[$],It=Mt.object,Pt=Mt.geometry,zt=j===null?Mt.material:j,Vt=Mt.group;It.layers.test(J.layers)&&th(It,X,J,Pt,zt,Vt)}}function th(R,X,J,j,$,ft){R.onBeforeRender(_,X,J,j,$,ft),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(_,X,J,j,R,ft),$.transparent===!0&&$.side===Ge&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,_.renderBufferDirect(J,X,j,$,R,ft),$.side=bn,$.needsUpdate=!0,_.renderBufferDirect(J,X,j,$,R,ft),$.side=Ge):_.renderBufferDirect(J,X,j,$,R,ft),R.onAfterRender(_,X,J,j,$,ft)}function pr(R,X,J){X.isScene!==!0&&(X=ot);let j=dt.get(R),$=p.state.lights,ft=p.state.shadowsArray,Mt=$.state.version,It=Ct.getParameters(R,$.state,ft,X,J),Pt=Ct.getProgramCacheKey(It),zt=j.programs;j.environment=R.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(R.isMeshStandardMaterial?K:T).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",Ht),zt=new Map,j.programs=zt);let Vt=zt.get(Pt);if(Vt!==void 0){if(j.currentProgram===Vt&&j.lightsStateVersion===Mt)return nh(R,It),Vt}else It.uniforms=Ct.getUniforms(R),R.onBeforeCompile(It,_),Vt=Ct.acquireProgram(It,Pt),zt.set(Pt,Vt),j.uniforms=It.uniforms;let Lt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Lt.clippingPlanes=ut.uniform),nh(R,It),j.needsLights=Bf(R),j.lightsStateVersion=Mt,j.needsLights&&(Lt.ambientLightColor.value=$.state.ambient,Lt.lightProbe.value=$.state.probe,Lt.directionalLights.value=$.state.directional,Lt.directionalLightShadows.value=$.state.directionalShadow,Lt.spotLights.value=$.state.spot,Lt.spotLightShadows.value=$.state.spotShadow,Lt.rectAreaLights.value=$.state.rectArea,Lt.ltc_1.value=$.state.rectAreaLTC1,Lt.ltc_2.value=$.state.rectAreaLTC2,Lt.pointLights.value=$.state.point,Lt.pointLightShadows.value=$.state.pointShadow,Lt.hemisphereLights.value=$.state.hemi,Lt.directionalShadowMap.value=$.state.directionalShadowMap,Lt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Lt.spotShadowMap.value=$.state.spotShadowMap,Lt.spotLightMatrix.value=$.state.spotLightMatrix,Lt.spotLightMap.value=$.state.spotLightMap,Lt.pointShadowMap.value=$.state.pointShadowMap,Lt.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Vt,j.uniformsList=null,Vt}function eh(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=is.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function nh(R,X){let J=dt.get(R);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Of(R,X,J,j,$){X.isScene!==!0&&(X=ot),I.resetTextureUnits();let ft=X.fog,Mt=j.isMeshStandardMaterial?X.environment:null,It=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:be,Pt=(j.isMeshStandardMaterial?K:T).get(j.envMap||Mt),zt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Vt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,le=!!J.morphAttributes.color,he=ri;j.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(he=_.toneMapping);let qe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,te=qe!==void 0?qe.length:0,Nt=dt.get(j),Pn=p.state.lights;if(N===!0&&(F===!0||R!==y)){let on=R===y&&j.id===g;ut.setState(j,R,on)}let ee=!1;j.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Pn.state.version||Nt.outputColorSpace!==It||$.isBatchedMesh&&Nt.batching===!1||!$.isBatchedMesh&&Nt.batching===!0||$.isBatchedMesh&&Nt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Nt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Nt.instancing===!1||!$.isInstancedMesh&&Nt.instancing===!0||$.isSkinnedMesh&&Nt.skinning===!1||!$.isSkinnedMesh&&Nt.skinning===!0||$.isInstancedMesh&&Nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Nt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Nt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Nt.instancingMorph===!1&&$.morphTexture!==null||Nt.envMap!==Pt||j.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Vt||Nt.morphTargets!==Lt||Nt.morphNormals!==jt||Nt.morphColors!==le||Nt.toneMapping!==he||Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=j.version);let dn=Nt.currentProgram;ee===!0&&(dn=pr(j,X,$));let Oi=!1,Ke=!1,Ts=!1,ue=dn.getUniforms(),Mn=Nt.uniforms;if(vt.useProgram(dn.program)&&(Oi=!0,Ke=!0,Ts=!0),j.id!==g&&(g=j.id,Ke=!0),Oi||y!==R){vt.buffers.depth.getReversed()?(P.copy(R.projectionMatrix),Gd(P),Wd(P),ue.setValue(z,"projectionMatrix",P)):ue.setValue(z,"projectionMatrix",R.projectionMatrix),ue.setValue(z,"viewMatrix",R.matrixWorldInverse);let Zn=ue.map.cameraPosition;Zn!==void 0&&Zn.setValue(z,q.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ue.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ke=!0,Ts=!0)}if($.isSkinnedMesh){ue.setOptional(z,$,"bindMatrix"),ue.setOptional(z,$,"bindMatrixInverse");let on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ue.setValue(z,"boneTexture",on.boneTexture,I))}$.isBatchedMesh&&(ue.setOptional(z,$,"batchingTexture"),ue.setValue(z,"batchingTexture",$._matricesTexture,I),ue.setOptional(z,$,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",$._indirectTexture,I),ue.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",$._colorsTexture,I));let As=J.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Bt.update($,J,dn),(Ke||Nt.receiveShadow!==$.receiveShadow)&&(Nt.receiveShadow=$.receiveShadow,ue.setValue(z,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Mn.envMap.value=Pt,Mn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),Ke&&(ue.setValue(z,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Ff(Mn,Ts),ft&&j.fog===!0&&xt.refreshFogUniforms(Mn,ft),xt.refreshMaterialUniforms(Mn,j,B,V,p.state.transmissionRenderTarget[R.id]),is.upload(z,eh(Nt),Mn,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(is.upload(z,eh(Nt),Mn,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ue.setValue(z,"center",$.center),ue.setValue(z,"modelViewMatrix",$.modelViewMatrix),ue.setValue(z,"normalMatrix",$.normalMatrix),ue.setValue(z,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let on=j.uniformsGroups;for(let Zn=0,Kn=on.length;Zn<Kn;Zn++){let ih=on[Zn];W.update(ih,dn),W.bind(ih,dn)}}return dn}function Ff(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Bf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,X,J){dt.get(R.texture).__webglTexture=X,dt.get(R.depthTexture).__webglTexture=J;let j=dt.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){let J=dt.get(R);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,J=0){S=R,b=X,A=J;let j=!0,$=null,ft=!1,Mt=!1;if(R){let Pt=dt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(z.FRAMEBUFFER,null),j=!1;else if(Pt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Pt.__hasExternalTextures)I.rebindTextures(R,dt.get(R.texture).__webglTexture,dt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Lt=R.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&dt.has(Lt)&&(R.width!==Lt.image.width||R.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);let Vt=dt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[X])?$=Vt[X][J]:$=Vt[X],ft=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?$=dt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?$=Vt[J]:$=Vt,E.copy(R.viewport),L.copy(R.scissor),k=R.scissorTest}else E.copy(st).multiplyScalar(B).floor(),L.copy(rt).multiplyScalar(B).floor(),k=ht;if(vt.bindFramebuffer(z.FRAMEBUFFER,$)&&j&&vt.drawBuffers(R,$),vt.viewport(E),vt.scissor(L),vt.setScissorTest(k),ft){let Pt=dt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pt.__webglTexture,J)}else if(Mt){let Pt=dt.get(R.texture),zt=X||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,J||0,zt)}g=-1},this.readRenderTargetPixels=function(R,X,J,j,$,ft,Mt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){vt.bindFramebuffer(z.FRAMEBUFFER,It);try{let Pt=R.texture,zt=Pt.format,Vt=Pt.type;if(!wt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-j&&J>=0&&J<=R.height-$&&z.readPixels(X,J,j,$,Wt.convert(zt),Wt.convert(Vt),ft)}finally{let Pt=S!==null?dt.get(S).__webglFramebuffer:null;vt.bindFramebuffer(z.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,X,J,j,$,ft,Mt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=dt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){let Pt=R.texture,zt=Pt.format,Vt=Pt.type;if(!wt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-j&&J>=0&&J<=R.height-$){vt.bindFramebuffer(z.FRAMEBUFFER,It);let Lt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Lt),z.bufferData(z.PIXEL_PACK_BUFFER,ft.byteLength,z.STREAM_READ),z.readPixels(X,J,j,$,Wt.convert(zt),Wt.convert(Vt),0);let jt=S!==null?dt.get(S).__webglFramebuffer:null;vt.bindFramebuffer(z.FRAMEBUFFER,jt);let le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Vd(z,le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Lt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ft),z.deleteBuffer(Lt),z.deleteSync(le),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,J=0){R.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);let j=Math.pow(2,-J),$=Math.floor(R.image.width*j),ft=Math.floor(R.image.height*j),Mt=X!==null?X.x:0,It=X!==null?X.y:0;I.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Mt,It,$,ft),vt.unbindTexture()},this.copyTextureToTexture=function(R,X,J=null,j=null,$=0){R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],X=arguments[2],$=arguments[3]||0,J=null);let ft,Mt,It,Pt,zt,Vt,Lt,jt,le,he=R.isCompressedTexture?R.mipmaps[$]:R.image;J!==null?(ft=J.max.x-J.min.x,Mt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Pt=J.min.x,zt=J.min.y,Vt=J.isBox3?J.min.z:0):(ft=he.width,Mt=he.height,It=he.depth||1,Pt=0,zt=0,Vt=0),j!==null?(Lt=j.x,jt=j.y,le=j.z):(Lt=0,jt=0,le=0);let qe=Wt.convert(X.format),te=Wt.convert(X.type),Nt;X.isData3DTexture?(I.setTexture3D(X,0),Nt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Nt=z.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Nt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);let Pn=z.getParameter(z.UNPACK_ROW_LENGTH),ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),dn=z.getParameter(z.UNPACK_SKIP_PIXELS),Oi=z.getParameter(z.UNPACK_SKIP_ROWS),Ke=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,he.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pt),z.pixelStorei(z.UNPACK_SKIP_ROWS,zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);let Ts=R.isDataArrayTexture||R.isData3DTexture,ue=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Mn=dt.get(R),As=dt.get(X),on=dt.get(Mn.__renderTarget),Zn=dt.get(As.__renderTarget);vt.bindFramebuffer(z.READ_FRAMEBUFFER,on.__webglFramebuffer),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<It;Kn++)Ts&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.get(R).__webglTexture,$,Vt+Kn),R.isDepthTexture?(ue&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.get(X).__webglTexture,$,le+Kn),z.blitFramebuffer(Pt,zt,ft,Mt,Lt,jt,ft,Mt,z.DEPTH_BUFFER_BIT,z.NEAREST)):ue?z.copyTexSubImage3D(Nt,$,Lt,jt,le+Kn,Pt,zt,ft,Mt):z.copyTexSubImage2D(Nt,$,Lt,jt,le+Kn,Pt,zt,ft,Mt);vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Nt,$,Lt,jt,le,ft,Mt,It,qe,te,he.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,$,Lt,jt,le,ft,Mt,It,qe,he.data):z.texSubImage3D(Nt,$,Lt,jt,le,ft,Mt,It,qe,te,he):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,Lt,jt,ft,Mt,qe,te,he.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,Lt,jt,he.width,he.height,qe,he.data):z.texSubImage2D(z.TEXTURE_2D,$,Lt,jt,ft,Mt,qe,te,he);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Oi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ke),$===0&&X.generateMipmaps&&z.generateMipmap(Nt),vt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,J=null,j=null,$=0){return R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,R=arguments[2],X=arguments[3],$=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,J,j,$)},this.initRenderTarget=function(R){dt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),vt.unbindTexture()},this.resetState=function(){b=0,A=0,S=null,vt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var ro=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},qs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},He=new D,Ys=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ru=new D,ou=new Qt,au=new Qt,zx=new D,lu=new Ot,Ur=new D,Sa=new tn,cu=new Ot,ba=new ds,oo=class extends Dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new We),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ur),this.boundingBox.expandByPoint(Ur)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ur),this.boundingSphere.expandByPoint(Ur)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),t.ray.intersectsSphere(Sa)!==!1&&(cu.copy(i).invert(),ba.copy(t.ray).applyMatrix4(cu),!(this.boundingBox!==null&&ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ba)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;ou.fromBufferAttribute(i.attributes.skinIndex,t),au.fromBufferAttribute(i.attributes.skinWeight,t),ru.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=au.getComponent(r);if(o!==0){let a=ou.getComponent(r);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(zx.copy(ru).applyMatrix4(lu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Zs=class extends fe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Li=class extends ye{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ze,h=ze,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hu=new Ot,Hx=new Ot,ao=class s{constructor(t=[],e=[]){this.uuid=yn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Hx;hu.multiplyMatrices(a,e[r]),hu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Li(e,t,t,Ye,Pe);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zs),this.bones.push(o),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Di=class extends Se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ji=new Ot,uu=new Ot,Or=[],fu=new We,Vx=new Ot,Ls=new Dt,Ds=new tn,li=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),fu.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ds.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),uu.multiplyMatrices(n,Ji),Ls.matrixWorld=uu,Ls.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){let l=Or[o];l.instanceId=r,l.object=this,e.push(l)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(i*this.count),i,this.count,nc,Pe));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ks=class extends en{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},lo=new D,co=new D,du=new Ot,Ns=new ds,Fr=new tn,wa=new D,pu=new D,gs=class extends fe{constructor(t=new _e,e=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)lo.fromBufferAttribute(e,i-1),co.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=lo.distanceTo(co);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;du.copy(i).invert(),Ns.copy(t.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=d,m=x-1;v<m;v+=c){let p=h.getX(v),M=h.getX(v+1),w=Br(this,t,Ns,l,p,M);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(x-1),m=h.getX(d),p=Br(this,t,Ns,l,v,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=d,m=x-1;v<m;v+=c){let p=Br(this,t,Ns,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){let v=Br(this,t,Ns,l,x-1,d);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Br(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(lo.fromBufferAttribute(o,i),co.fromBufferAttribute(o,r),e.distanceSqToSegment(lo,co,wa,pu)>n)return;wa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(wa);if(!(l<t.near||l>t.far))return{distance:l,point:pu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var mu=new D,gu=new D,ho=class extends gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mu.distanceTo(gu);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uo=class extends gs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Js=class extends en{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new Ot,Cl=new ds,kr=new tn,zr=new D,fo=class extends fe{constructor(t=new _e,e=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;xu.copy(i).invert(),Cl.copy(t.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,v=d;x<v;x++){let m=c.getX(x);zr.fromBufferAttribute(u,m),_u(zr,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,v=d;x<v;x++)zr.fromBufferAttribute(u,x),_u(zr,x,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _u(s,t,e,n,i,r,o){let a=Cl.distanceSqToPoint(s);if(a<e){let l=new D;Cl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var wn=class extends ye{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Il=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,i=[],r=[],o=[],a=new D,l=new Ot;for(let d=0;d<=t;d++){let x=d/t;i[d]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ee(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ee(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function lc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Hr=new D,Ea=new lc,Ta=new lc,Aa=new lc,po=class extends Il{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Hr.subVectors(i[0],i[1]).add(i[0]),c=Hr);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Hr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Ea.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,v,m),Ta.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,v,m),Aa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Aa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ea.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var mo=class s extends _e{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new D,h=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},go=class s extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,v=[],m=n/2,p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function M(){let _=new D,C=new D,b=0,A=(e-t)/n;for(let S=0;S<=r;S++){let g=[],y=S/r,E=y*(e-t)+t;for(let L=0;L<=i;L++){let k=L/i,H=k*l+a,O=Math.sin(H),U=Math.cos(H);C.x=E*O,C.y=-y*n+m,C.z=E*U,u.push(C.x,C.y,C.z),_.set(O,A,U).normalize(),f.push(_.x,_.y,_.z),d.push(k,1-y),g.push(x++)}v.push(g)}for(let S=0;S<i;S++)for(let g=0;g<r;g++){let y=v[g][S],E=v[g+1][S],L=v[g+1][S+1],k=v[g][S+1];(t>0||g!==0)&&(h.push(y,E,k),b+=3),(e>0||g!==r-1)&&(h.push(E,L,k),b+=3)}c.addGroup(p,b,0),p+=b}function w(_){let C=x,b=new Ut,A=new D,S=0,g=_===!0?t:e,y=_===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),x++;let E=x;for(let L=0;L<=i;L++){let H=L/i*l+a,O=Math.cos(H),U=Math.sin(H);A.x=g*U,A.y=m*y,A.z=g*O,u.push(A.x,A.y,A.z),f.push(0,y,0),b.x=O*.5+.5,b.y=U*.5*y+.5,d.push(b.x,b.y),x++}for(let L=0;L<i;L++){let k=C+L,H=E+L;_===!0?h.push(H,H+1,k):h.push(H+1,H,k),S+=3}c.addGroup(p,S,_===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Pl=class s extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new D,_=new D,C=new D;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],_),d(e[b+2],C),l(w,_,C,M)}function l(M,w,_,C){let b=C+1,A=[];for(let S=0;S<=b;S++){A[S]=[];let g=M.clone().lerp(_,S/b),y=w.clone().lerp(_,S/b),E=b-S;for(let L=0;L<=E;L++)L===0&&S===b?A[S][L]=g:A[S][L]=g.clone().lerp(y,L/E)}for(let S=0;S<b;S++)for(let g=0;g<2*(b-S)-1;g++){let y=Math.floor(g/2);g%2===0?(f(A[S][y+1]),f(A[S+1][y]),f(A[S][y])):(f(A[S][y+1]),f(A[S+1][y+1]),f(A[S+1][y]))}}function c(M){let w=new D;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(M),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let M=new D;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let _=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(_,1-C)}x(),u()}function u(){for(let M=0;M<o.length;M+=6){let w=o[M+0],_=o[M+2],C=o[M+4],b=Math.max(w,_,C),A=Math.min(w,_,C);b>.9&&A<.1&&(w<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,w){let _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function x(){let M=new D,w=new D,_=new D,C=new D,b=new Ut,A=new Ut,S=new Ut;for(let g=0,y=0;g<r.length;g+=9,y+=6){M.set(r[g+0],r[g+1],r[g+2]),w.set(r[g+3],r[g+4],r[g+5]),_.set(r[g+6],r[g+7],r[g+8]),b.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),S.set(o[y+4],o[y+5]),C.copy(M).add(w).add(_).divideScalar(3);let E=m(C);v(b,y+0,M,E),v(A,y+2,w,E),v(S,y+4,_,E)}}function v(M,w,_,C){C<0&&M.x===1&&(o[w]=M.x-1),_.x===0&&_.z===0&&(o[w]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var xo=class s extends Pl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var _o=class extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ie=class extends en{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$e=class extends ie{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Gx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Wx(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function vu(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function qu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var ci=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends ci{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,l=2*n-e;break;case uh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(i-e),v=x*x,m=v*x,p=-f*m+2*f*v-f*x,M=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*x+1,w=(-1-d)*m+(1.5+d)*v+.5*x,_=d*m-d*v;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+M*o[c+C]+w*o[l+C]+_*o[u+C];return r}},Dl=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Nl=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case hs:e=this.InterpolantFactoryMethodDiscrete;break;case us:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Gx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let v=e[u+x];if(v!==e[f+x]||v!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=us;var hi=class extends hn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=hs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends hn{};vo.prototype.ValueTypeName="color";var Xn=class extends hn{};Xn.prototype.ValueTypeName="number";var Ul=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Oe.slerpFlat(r,0,o,c-a,o,c,l);return r}},$n=class extends hn{InterpolantFactoryMethodLinear(t){return new Ul(this.times,this.values,this.getValueSize(),t)}};$n.prototype.ValueTypeName="quaternion";$n.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends hn{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=hs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends hn{};qn.prototype.ValueTypeName="vector";var yo=class{constructor(t="",e=-1,n=[],i=pd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push($x(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Wx(l);l=vu(l,1,h),c=vu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xn(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,x,v){if(d.length!==0){let m=[],p=[];qu(d,m,p,x),m.length!==0&&v.push(new u(f,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let v=0;v<f[x].morphTargets.length;v++)d[f[x].morphTargets[v]]=-1;for(let v in d){let m=[],p=[];for(let M=0;M!==f[x].morphTargets.length;++M){let w=f[x];m.push(w.time),p.push(w.morphTarget===v?1:0)}i.push(new Xn(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{let d=".bones["+e[u].name+"]";n(qn,d+".position",f,"pos",i),n($n,d+".quaternion",f,"rot",i),n(qn,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Xx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xn;case"vector":case"vector2":case"vector3":case"vector4":return qn;case"color":return vo;case"quaternion":return $n;case"bool":case"boolean":return hi;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $x(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Xx(s.type);if(s.times===void 0){let e=[],n=[];qu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var si={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ol=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},qx=new Ol,En=class{constructor(t){this.manager=t!==void 0?t:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};En.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},Fl=class extends Error{constructor(t,e){super(t),this.response=e}},xs=class extends En{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=si.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Fn[t]!==void 0){Fn[t].push({onLoad:e,onProgress:n,onError:i});return}Fn[t]=[],Fn[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,v=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:w,value:_})=>{if(w)p.close();else{v+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:d});for(let b=0,A=h.length;b<A;b++){let S=h[b];S.onProgress&&S.onProgress(C)}p.enqueue(_),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Fl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(x=>d.decode(x))}}}).then(c=>{si.add(t,c);let h=Fn[t];delete Fn[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Fn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fn[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Bl=class extends En{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=si.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ws("img");function l(){h(),si.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Mo=class extends En{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Li,a=new xs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_n,o.wrapT=c.wrapT!==void 0?c.wrapT:_n,o.magFilter=c.magFilter!==void 0?c.magFilter:xe,o.minFilter=c.minFilter!==void 0?c.minFilter:xe,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=vn),c.mipmapCount===1&&(o.minFilter=xe),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}},So=class extends En{constructor(t){super(t)}load(t,e,n,i){let r=new ye,o=new Bl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},_s=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},bo=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ra=new Ot,yu=new D,Mu=new D,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(yu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kl=class extends js{constructor(){super(new Te(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},wo=class extends _s{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Su=new Ot,Us=new D,Ca=new D,zl=class extends js{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),Ca.copy(n.position),Ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}},Eo=class extends _s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hl=class extends js{constructor(){super(new ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Hl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var fi=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var To=class extends En{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=si.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),si.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});si.add(t,l),r.manager.itemStart(t)}};var Ao=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bu(){return performance.now()}var cc="\\[\\]\\.:\\/",Yx=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Zx="[^"+cc.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",hc),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),t_=new RegExp("^"+Kx+Jx+jx+Qx+"$"),e_=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=t_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Vl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);var Yu=new D,n_=new Oe,Zu=new D,Lo=class extends fe{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}};var Tn=new Ot,i_=new Ot,Do=class{constructor(t={}){let e=this,n,i,r,o,a={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){let M=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let w,_;p.isOrthographicCamera&&(w=-(p.right+p.left)/2,_=(p.top+p.bottom)/2);let C=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,b=p.isOrthographicCamera?`scale( ${C} )scale(`+M+")translate("+u(w)+"px,"+u(_)+"px)"+f(p.matrixWorldInverse):`scale( ${C} )translateZ(`+M+"px)"+f(p.matrixWorldInverse),S=(p.isPerspectiveCamera?"perspective("+M+"px) ":"")+b+"translate("+r+"px,"+o+"px)";a.camera.style!==S&&(h.style.transform=S,a.camera.style=S),v(m,m,p,b)},this.setSize=function(m,p){n=m,i=p,r=n/2,o=i/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function f(m){let p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function d(m){let p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function x(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,M=m.children.length;p<M;p++)x(m.children[p])}function v(m,p,M,w){if(m.visible===!1){x(m);return}if(m.isCSS3DObject){let _=m.layers.test(M.layers)===!0,C=m.element;if(C.style.display=_===!0?"":"none",_===!0){m.onBeforeRender(e,p,M);let b;m.isCSS3DSprite?(Tn.copy(M.matrixWorldInverse),Tn.transpose(),m.rotation2D!==0&&Tn.multiply(i_.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Yu,n_,Zu),Tn.setPosition(Yu),Tn.scale(Zu),Tn.elements[3]=0,Tn.elements[7]=0,Tn.elements[11]=0,Tn.elements[15]=1,b=d(Tn)):b=d(m.matrixWorld);let A=a.objects.get(m);if(A===void 0||A.style!==b){C.style.transform=b;let S={style:b};a.objects.set(m,S)}C.parentNode!==h&&h.appendChild(C),m.onAfterRender(e,p,M)}}for(let _=0,C=m.children.length;_<C;_++)v(m.children[_],p,M,w)}}};function uc(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ku(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let x=Ku(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Ku(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let v=h.getComponent(f,x);a.setComponent(f+u,x,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function fc(s,t){if(t===Ou)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===er||t===Co){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===er)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var No=class extends En{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new vc(e)}),this.register(function(e){return new yc(e)}),this.register(function(e){return new Cc(e)}),this.register(function(e){return new Ic(e)}),this.register(function(e){return new Pc(e)}),this.register(function(e){return new Sc(e)}),this.register(function(e){return new bc(e)}),this.register(function(e){return new wc(e)}),this.register(function(e){return new Ec(e)}),this.register(function(e){return new _c(e)}),this.register(function(e){return new Tc(e)}),this.register(function(e){return new Mc(e)}),this.register(function(e){return new Rc(e)}),this.register(function(e){return new Ac(e)}),this.register(function(e){return new gc(e)}),this.register(function(e){return new Lc(e)}),this.register(function(e){return new Dc(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=fi.extractUrlBase(t);o=fi.resolveURL(c,this.path)}else o=fi.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new xs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ef){try{o[Zt.KHR_BINARY_GLTF]=new Nc(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hc(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Zt.KHR_MATERIALS_UNLIT:o[u]=new xc;break;case Zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Uc(r,this.dracoLoader);break;case Zt.KHR_TEXTURE_TRANSFORM:o[u]=new Oc;break;case Zt.KHR_MESH_QUANTIZATION:o[u]=new Fc;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function s_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gc=class{constructor(t){this.parser=t,this.name=Zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new At(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],be);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Eo(h),c.distance=u;break;case"spot":c=new wo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},xc=class{constructor(){this.name=Zt.KHR_MATERIALS_UNLIT}getMaterialType(){return De}extendParams(t,e,n){let i=[];t.color=new At(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],be),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,oe))}return Promise.all(i)}},_c=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},vc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ut(a,a)}return Promise.all(r)}},yc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Mc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Sc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],be)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,oe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},bc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},wc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(a[0],a[1],a[2],be),Promise.all(r)}},Ec=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Tc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(a[0],a[1],a[2],be),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,oe)),Promise.all(r)}},Ac=class{constructor(t){this.parser=t,this.name=Zt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},Rc=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$e}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Cc=class{constructor(t){this.parser=t,this.name=Zt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Ic=class{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Pc=class{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Lc=class{constructor(t){this.name=Zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Dc=class{constructor(t){this.name=Zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let x of u){let v=new Ot,m=new D,p=new Oe,M=new D(1,1,1),w=new li(x.geometry,x.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),w.setMatrixAt(_,v.compose(m,p,M));for(let _ in l)if(_==="_COLOR_0"){let C=l[_];w.instanceColor=new Di(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&x.geometry.setAttribute(_,l[_]);fe.prototype.copy.call(w,x),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},ef="glTF",sr=12,Ju={JSON:1313821514,BIN:5130562},Nc=class{constructor(t){this.name=Zt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-sr,r=new DataView(t,sr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ju.JSON){let c=new Uint8Array(t,sr+o,a);this.content=n.decode(c)}else if(l===Ju.BIN){let c=sr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uc=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=kc[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=kc[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Ms[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let x in d.attributes){let v=d.attributes[x],m=l[x];m!==void 0&&(v.normalized=m)}u(d)},a,c,be,f)})})}},Oc=class{constructor(){this.name=Zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Fc=class{constructor(){this.name=Zt.KHR_MESH_QUANTIZATION}},Uo=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,x=t*c,v=x-c,m=-2*d+3*f,p=d-f,M=1-m,w=p-f+u;for(let _=0;_!==a;_++){let C=o[v+_+a],b=o[v+_+l]*h,A=o[x+_+a],S=o[x+_]*h;r[_]=M*C+w*b+m*A+p*S}return r}},r_=new Oe,Bc=class extends Uo{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return r_.fromArray(r).normalize().toArray(r),r}},un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:ze,9729:xe,9984:jl,9985:Bs,9986:ji,9987:vn},Qu={33071:_n,33648:Vs,10497:Qe},dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},o_={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),s.DefaultMaterial}function Ni(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Yn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function l_(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function c_(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function h_(s){let t,e=s.extensions&&s.extensions[Zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+mc(e.attributes):t=s.indices+":"+mc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+mc(s.targets[n]);return t}function mc(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function u_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var f_=new Ot,Hc=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new s_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new So(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ni(r,a,i),Yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Zt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(fi.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=dc[i.type],a=Ms[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Se(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=dc[i.type],c=Ms[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0,v,m;if(d&&d!==u){let p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=e.cache.get(M);w||(v=new c(a,p*d,i.count*d/h),w=new qs(v,d/h),e.cache.add(M,w)),m=new Ys(w,l,f%d/h,x)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),m=new Se(v,l,x);if(i.sparse!==void 0){let p=dc.SCALAR,M=Ms[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new M(o[1],w,i.sparse.count*p),b=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new Se(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,S=C.length;A<S;A++){let g=C[A];if(m.setX(g,b[A*l]),l>=2&&m.setY(g,b[A*l+1]),l>=3&&m.setZ(g,b[A*l+2]),l>=4&&m.setW(g,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ju[f.magFilter]||xe,h.minFilter=ju[f.minFilter]||vn,h.wrapS=Qu[f.wrapS]||Qe,h.wrapT=Qu[f.wrapT]||Qe,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==xe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let x=f;e.isImageBitmapLoader===!0&&(x=function(v){let m=new ye(v);m.needsUpdate=!0,f(m)}),e.load(fi.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Yn(u,o),u.userData.mimeType=o.mimeType||u_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Zt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Js,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ks,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ie}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[Zt.KHR_MATERIALS_UNLIT]){let u=i[Zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],be),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,oe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ge);let h=r.alphaMode||pc.OPAQUE;if(h===pc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===pc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==De&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ut(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==De&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==De){let u=r.emissiveFactor;a.emissive=new At().setRGB(u[0],u[1],u[2],be)}return r.emissiveTexture!==void 0&&o!==De&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,oe)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Yn(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ni(i,u,r),u})}createUniqueName(t){let e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return tf(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=h_(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Zt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=tf(new _e,c,e),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?a_(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let v=h[d],m=o[d],p,M=c[d];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new oo(v,M):new Dt(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?p.geometry=fc(p.geometry,Co):m.mode===un.TRIANGLE_FAN&&(p.geometry=fc(p.geometry,er));else if(m.mode===un.LINES)p=new ho(v,M);else if(m.mode===un.LINE_STRIP)p=new gs(v,M);else if(m.mode===un.LINE_LOOP)p=new uo(v,M);else if(m.mode===un.POINTS)p=new fo(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&c_(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Yn(p,r),m.extensions&&Ni(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,x=u.length;d<x;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ni(i,u[0],r),u[0];let f=new Le;r.extensions&&Ni(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Te(di.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ai(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Yn(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ot;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ao(a,l)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],x=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,M=i.parameters!==void 0?i.parameters[x.output]:x.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(x),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],v=u[3],m=u[4],p=[];for(let M=0,w=f.length;M<w;M++){let _=f[M],C=d[M],b=x[M],A=v[M],S=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let g=n._createAnimationTracks(_,C,b,A,S);if(g)for(let y=0;y<g.length;y++)p.push(g[y])}return new yo(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,f_)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Zs:c.length>1?h=new Le:c.length===1?h=c[0]:h=new fe,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Yn(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){let u=new Ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new Le;n.name&&(r.name=i.createUniqueName(n.name)),Yn(r,n),n.extensions&&Ni(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof en||f instanceof ye)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,l=[];mi[r.path]===mi.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(mi[r.path]){case mi.weights:c=Xn;break;case mi.rotation:c=$n;break;case mi.position:case mi.scale:c=qn;break;default:switch(n.itemSize){case 1:c=Xn;break;case 2:case 3:default:c=qn;break}break}let h=i.interpolation!==void 0?o_[i.interpolation]:us,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let x=new c(l[f]+"."+mi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=zc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof $n?Bc:Uo;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function d_(s,t,e){let n=t.attributes,i=new We;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){let h=zc(Ms[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let v=zc(Ms[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new tn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function tf(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=kc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return qt.workingColorSpace!==be&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qt.workingColorSpace}" not supported.`),Yn(s,t),d_(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?l_(s,t.targets,e):s})}var Oo=class extends Mo{constructor(t){super(t),this.type=Ne}parse(t){let o=function(S,g){switch(S){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},h=`
`,u=function(S,g,y){g=g||1024;let L=S.pos,k=-1,H=0,O="",U=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(k=U.indexOf(h))&&H<g&&L<S.byteLength;)O+=U,H+=U.length,L+=128,U+=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<k?(y!==!1&&(S.pos+=H+k+1),O+U.slice(0,k)):!1},f=function(S){let g=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,U;for((S.pos>=S.byteLength||!(O=u(S)))&&o(1,"no header found"),(U=O.match(g))||o(3,"bad initial token"),H.valid|=1,H.programtype=U[1],H.string+=O+`
`;O=u(S),O!==!1;){if(H.string+=O+`
`,O.charAt(0)==="#"){H.comments+=O+`
`;continue}if((U=O.match(y))&&(H.gamma=parseFloat(U[1])),(U=O.match(E))&&(H.exposure=parseFloat(U[1])),(U=O.match(L))&&(H.valid|=2,H.format=U[1]),(U=O.match(k))&&(H.valid|=4,H.height=parseInt(U[1],10),H.width=parseInt(U[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},d=function(S,g,y){let E=g;if(E<8||E>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);E!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");let L=new Uint8Array(4*g*y);L.length||o(4,"unable to allocate buffer space");let k=0,H=0,O=4*E,U=new Uint8Array(4),V=new Uint8Array(O),B=y;for(;B>0&&H<S.byteLength;){H+4>S.byteLength&&o(1),U[0]=S[H++],U[1]=S[H++],U[2]=S[H++],U[3]=S[H++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=E)&&o(3,"bad rgbe scanline format");let tt=0,Q;for(;tt<O&&H<S.byteLength;){Q=S[H++];let rt=Q>128;if(rt&&(Q-=128),(Q===0||tt+Q>O)&&o(3,"bad scanline data"),rt){let ht=S[H++];for(let Z=0;Z<Q;Z++)V[tt++]=ht}else V.set(S.subarray(H,H+Q),tt),tt+=Q,H+=Q}let st=E;for(let rt=0;rt<st;rt++){let ht=0;L[k]=V[rt+ht],ht+=E,L[k+1]=V[rt+ht],ht+=E,L[k+2]=V[rt+ht],ht+=E,L[k+3]=V[rt+ht],k+=4}B--}return L},x=function(S,g,y,E){let L=S[g+3],k=Math.pow(2,L-128)/255;y[E+0]=S[g+0]*k,y[E+1]=S[g+1]*k,y[E+2]=S[g+2]*k,y[E+3]=1},v=function(S,g,y,E){let L=S[g+3],k=Math.pow(2,L-128)/255;y[E+0]=nr.toHalfFloat(Math.min(S[g+0]*k,65504)),y[E+1]=nr.toHalfFloat(Math.min(S[g+1]*k,65504)),y[E+2]=nr.toHalfFloat(Math.min(S[g+2]*k,65504)),y[E+3]=nr.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;let p=f(m),M=p.width,w=p.height,_=d(m.subarray(m.pos),M,w),C,b,A;switch(this.type){case Pe:A=_.length/4;let S=new Float32Array(A*4);for(let y=0;y<A;y++)x(_,y*4,S,y*4);C=S,b=Pe;break;case Ne:A=_.length/4;let g=new Uint16Array(A*4);for(let y=0;y<A;y++)v(_,y*4,g,y*4);C=g,b=Ne;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:w,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(o,a){switch(o.type){case Pe:case Ne:o.colorSpace=be,o.minFilter=xe,o.magFilter=xe,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,i)}};var Fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p_=new ai(-1,1,1,-1,0,1),Vc=class extends _e{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}},m_=new Vc,gi=class{constructor(t){this._mesh=new Dt(m_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ss=class extends nn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pi.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rr=class extends nn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Bo=class extends nn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ne}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ss(Fo),this.copyPass.material.blending=ln,this.clock=new Ao}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rr!==void 0&&(o instanceof rr?n=!0:o instanceof Bo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zo=class extends nn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var nf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var bs=class s extends nn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,o,{type:Ne}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ue(r,o,{type:Ne});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ue(r,o,{type:Ne});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=nf;this.highPassUniforms=pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Fo;this.copyUniforms=pi.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new gi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};bs.BlurDirectionX=new Ut(1,0);bs.BlurDirectionY=new Ut(0,1);var sf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ho=class extends nn{constructor(){super();let t=sf;this.uniforms=pi.clone(t.uniforms),this.material=new _o({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function g_(s){let t=atob(s),e=t.length,n=new Uint8Array(e);for(let i=0;i<e;i++)n[i]=t.charCodeAt(i);return n.buffer}function or(s){return new Promise((t,e)=>{let n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=s})}var x_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.32},uGrain:{value:.035},uCA:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain, uCA; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float r2 = dot(c,c);
      vec2 off = c * uCA * (1.0 + r2 * 4.0);
      vec4 base = texture2D(tDiffuse, vUv);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = base.g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      col *= 1.0 - uVignette * smoothstep(0.08, 0.55, r2);
      col += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain * base.a;
      gl_FragColor = vec4(col * step(0.002, base.a), base.a);
    }`},Vo=class{constructor(t,{quality:e="full"}={}){this.quality=e;let n=this.renderer=new so({antialias:e==="light",powerPreference:"high-performance",logarithmicDepthBuffer:!1,stencil:!1,alpha:!0,premultipliedAlpha:!0});n.setClearColor(0,0),n.setPixelRatio(e==="light"?1:Math.min(window.devicePixelRatio,1.5)),n.setSize(innerWidth,innerHeight),n.toneMapping=tr,n.toneMappingExposure=.95,n.outputColorSpace=oe,n.shadowMap.enabled=!0,n.shadowMap.type=Wl,n.domElement.classList.add("gl"),this.scene=new $s,this.camera=new Te(40,innerWidth/innerHeight,.5,9e3),this.css=new Do,this.css.setSize(innerWidth,innerHeight),this.css.domElement.classList.add("css3d"),t.appendChild(this.css.domElement),t.appendChild(n.domElement),this.cssScene=new $s,this.setupComposer(),addEventListener("resize",()=>this.resize())}setupComposer(){let t=this.renderer;if(this.quality==="light"){this.composer=null;return}let e=t.getDrawingBufferSize(new Ut),n=new Ue(e.x,e.y,{type:Ne,samples:4});if(this.composer=new ko(t,n),this.composer.addPass(new zo(this.scene,this.camera)),this.bloom=new bs(new Ut(e.x/2,e.y/2),.22,.5,.92),this.bloom.blendMaterial){let i=this.bloom.blendMaterial;i.blending=Xl,i.blendEquation=zn,i.blendSrc=Qs,i.blendDst=Qs,i.blendSrcAlpha=$l,i.blendDstAlpha=Qs}this.composer.addPass(this.bloom),this.composer.addPass(new Ho),this.final=new Ss(x_),this.composer.addPass(this.final)}setQuality(t){t!==this.quality&&(this.quality=t,this.renderer.setPixelRatio(t==="light"?1:Math.min(window.devicePixelRatio,1.5)),this.composer&&this.composer.dispose(),this.setupComposer(),this.sun&&(this.sun.shadow.mapSize.set(t==="light"?1024:4096,t==="light"?1024:4096),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.resize())}resize(){let t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.css.setSize(t,e),this.composer&&this.composer.setSize(t,e)}async setupSky(t){let e=this.scene,n=new Oo;n.setDataType(Pe);let i=n.parse(g_(t.hdr)),r=new Li(i.data,i.width,i.height,Ye,Pe);r.mapping=as,r.colorSpace=be,r.flipY=!0,r.minFilter=xe,r.magFilter=xe,r.needsUpdate=!0;let o=new ms(this.renderer);e.environment=o.fromEquirectangular(r).texture,e.environmentIntensity=.85;let a=0,l=0,c=i.data,h=i.width,u=i.height;for(let S=0;S<u/2;S++)for(let g=0;g<h;g++){let y=(S*h+g)*4,E=c[y]*.2126+c[y+1]*.7152+c[y+2]*.0722;E>a&&(a=E,l=y/4)}let f=l%h,d=Math.floor(l/h),x=(f+.5)/h,v=(.5-(d+.5)/u)*Math.PI,m=(x-.5)*Math.PI*2;this.sunDir=new D(Math.cos(m)*Math.cos(v),Math.sin(v),Math.sin(m)*Math.cos(v)).normalize();let p=await or(t.sky),M=new ye(p);M.mapping=as,M.colorSpace=oe,M.needsUpdate=!0,M.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),e.background=M,e.backgroundIntensity=1;let w=new At(144/255,150/255,167/255);e.fog=new ro(w,700,4200),console.log("sunDir",this.sunDir.toArray().map(S=>S.toFixed(2)).join(","));let _=this.sun=new vs(16773596,2.6);_.castShadow=!0;let C=this.quality==="light"?1024:4096;_.shadow.mapSize.set(C,C);let b=_.shadow.camera;b.left=-110,b.right=110,b.top=110,b.bottom=-110,b.near=1,b.far=900,_.shadow.bias=-4e-4,_.shadow.normalBias=.05,_.shadow.radius=2,e.add(_),e.add(_.target);let A=new bo(12571903,4872755,.25);e.add(A)}followShadow(t,e=110){if(!this.sun)return;let n=this.sun.shadow.camera;n.right!==e&&(n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.far=e>200?2400:900,n.updateProjectionMatrix());let i=2*e/this.sun.shadow.mapSize.x,r=t.clone();r.x=Math.round(r.x/i)*i,r.z=Math.round(r.z/i)*i,r.y=0,this.sun.target.position.copy(r),this.sun.position.copy(r).addScaledVector(this.sunDir,e>200?1200:400)}updateFog(){let t=this.scene.fog;if(!t)return;let e=Math.max(0,this.camera.position.y);t.near=700+e*4,t.far=4200+e*9}render(t){this.updateFog(),this.final&&(this.final.uniforms.uTime.value=t%1e3),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.css.render(this.cssScene,this.camera)}};var __=[[-260,0],[0,0],[260,0],[355,12],[398,62],[392,132],[338,176],[262,190],[214,214],[222,262],[178,306],[70,322],[-120,322],[-252,316],[-330,292],[-348,238],[-306,204],[-226,196],[-186,156],[-228,112],[-322,86],[-360,46],[-334,10]],Go=class{constructor(){let t=__.map(([o,a])=>new D(o,0,a));this.curve=new po(t,!0,"centripetal"),this.length=this.curve.getLength(),this.step=2,this.n=Math.round(this.length/this.step),this.step=this.length/this.n,this.P=[],this.T=[],this.N=[],this.K=[];for(let o=0;o<this.n;o++){let a=o/this.n,l=this.curve.getPointAt(a),c=this.curve.getTangentAt(a).setY(0).normalize();this.P.push(l),this.T.push(c),this.N.push(new D(-c.z,0,c.x))}let e=[];for(let o=0;o<this.n;o++){let a=this.T[(o-3+this.n)%this.n],c=this.T[(o+3)%this.n].clone().sub(a);e.push(c.dot(this.N[o])/(6*this.step))}for(let o=0;o<this.n;o++){let a=0,l=0;for(let c=-6;c<=6;c++){let h=1-Math.abs(c)/7;a+=e[(o+c+this.n)%this.n]*h,l+=h}this.K.push(a/l)}this.halfWidth=6;let n=new Float32Array(this.n);for(let o=0;o<this.n;o++)n[o]=di.clamp(this.K[o]*260,-4.2,4.2);this.line=new Float32Array(this.n);for(let o=0;o<this.n;o++){let a=0,l=0;for(let c=-14;c<=14;c++){let h=1-Math.abs(c)/15;a+=n[(o+c+this.n)%this.n]*h,l+=h}this.line[o]=a/l}let i=10.6,r=66;this.vCurve=new Float32Array(this.n);for(let o=0;o<this.n;o++){let a=Math.abs(this.K[o]);this.vCurve[o]=Math.min(r,a>1e-5?Math.sqrt(i/a):r)}this.startS=this.sAtX(-120)}wrap(t){let e=this.length;return(t%e+e)%e}idx(t){return Math.round(this.wrap(t)/this.step)%this.n}frame(t,e={}){t=this.wrap(t);let n=t/this.step,i=Math.floor(n)%this.n,r=(i+1)%this.n,o=n-Math.floor(n);return e.p=(e.p||new D).copy(this.P[i]).lerp(this.P[r],o),e.t=(e.t||new D).copy(this.T[i]).lerp(this.T[r],o).normalize(),e.n=(e.n||new D).set(-e.t.z,0,e.t.x),e.k=this.K[i]*(1-o)+this.K[r]*o,e}point(t,e=0,n=0){let i=this.frame(t);return i.p.clone().addScaledVector(i.n,e).setY(n)}sAtX(t){let e=0,n=1e9;for(let i=0;i<this.n;i++){let r=this.P[i];if(Math.abs(r.z)<20){let o=Math.abs(r.x-t);o<n&&(n=o,e=i)}}return e*this.step}forwardDist(t,e){return this.wrap(e-t)}lineAt(t){let e=this.wrap(t)/this.step,n=Math.floor(e)%this.n,i=e-Math.floor(e);return this.line[n]*(1-i)+this.line[(n+1)%this.n]*i}profile(t,e){let i=Math.max(2,Math.ceil(Math.abs(e)/1)),r=e/i,o=Math.sign(e)||1,a=new Float32Array(i+1),l=new Float32Array(i+1);for(let d=0;d<=i;d++)l[d]=this.vCurve[this.idx(t+r*d)];let c=d=>Math.max(1.2,8.2*(1-d/72)),h=9.2;a[0]=0;for(let d=1;d<=i;d++)a[d]=Math.min(l[d],Math.sqrt(a[d-1]**2+2*c(a[d-1])*Math.abs(r)));a[i]=0;for(let d=i-1;d>=0;d--)a[d]=Math.min(a[d],Math.sqrt(a[d+1]**2+2*h*Math.abs(r)));let u=new Float32Array(i+1),f=new Float32Array(i+1);for(let d=1;d<=i;d++){let x=Math.max(.5,(a[d]+a[d-1])/2);u[d]=u[d-1]+Math.abs(r)/x}for(let d=0;d<i;d++)f[d]=a[d+1]<a[d]-.02?1:0;return f[i]=1,{N:i,step:r,sgn:o,v:a,t:u,brake:f,T:u[i],sA:t,D:e}}sampleProfile(t,e){let n=t.t,i=0,r=t.N;if(e<=0)return{s:t.sA,v:0,brake:0,j:0};if(e>=t.T)return{s:t.sA+t.D,v:0,brake:1,j:t.N};for(;r-i>1;){let a=i+r>>1;n[a]<=e?i=a:r=a}let o=(e-n[i])/Math.max(1e-6,n[r]-n[i]);return{s:t.sA+t.step*(i+o),v:t.v[i]*(1-o)+t.v[r]*o,brake:t.brake[i],j:i+o}}ribbon({from:t,to:e,y:n=0,uScale:i=1,vScale:r=4,range:o=null,yFrom:a,yTo:l}){let c=[],h=[],u=[],f=[],d=[];if(o){let m=o[0];for(;d.push(m%this.n),!(m%this.n===o[1]%this.n||(m++,d.length>this.n)););}else for(let m=0;m<=this.n;m++)d.push(m%this.n);let x=0;d.forEach((m,p)=>{p>0&&(x+=this.step/r);let M=this.P[m],w=this.N[m],_=typeof t=="function"?t(m):t,C=typeof e=="function"?e(m):e,b=a!==void 0?typeof a=="function"?a(m):a:n,A=l!==void 0?typeof l=="function"?l(m):l:n;c.push(M.x+w.x*_,b,M.z+w.z*_,M.x+w.x*C,A,M.z+w.z*C);let S=Math.abs(C-_)/i;if(h.push(0,x,S,x),u.push(0,1,0,0,1,0),p>0){let g=(p-1)*2;f.push(g,g+1,g+2,g+1,g+3,g+2)}});let v=new _e;if(v.setAttribute("position",new Jt(c,3)),v.setAttribute("uv",new Jt(h,2)),v.setAttribute("normal",new Jt(u,3)),f.length>=3){let m=C=>new D(c[C*3],c[C*3+1],c[C*3+2]),p=m(f[0]),M=m(f[1]),w=m(f[2]);if(M.sub(p).cross(w.sub(p)).y<0)for(let C=0;C<f.length;C+=3){let b=f[C+1];f[C+1]=f[C+2],f[C+2]=b}}return v.setIndex(f),v.computeVertexNormals(),v}wall({offset:t,h0:e=0,h1:n=1,vScale:i=4,range:r=null,faceRight:o,flipU:a=!1}){let l=[],c=[],h=[],u=[];if(r){let x=r[0];for(;u.push(x%this.n),!(x%this.n===r[1]%this.n||(x++,u.length>this.n)););}else for(let x=0;x<=this.n;x++)u.push(x%this.n);let f=0;u.forEach((x,v)=>{v>0&&(f+=this.step/i);let m=typeof t=="function"?t(x):t,p=this.P[x],M=this.N[x],w=p.x+M.x*m,_=p.z+M.z*m;l.push(w,e,_,w,n,_);let C=a?-f:f;if(c.push(C,0,C,1),v>0){let b=(v-1)*2;o?h.push(b,b+2,b+1,b+1,b+2,b+3):h.push(b,b+1,b+2,b+1,b+3,b+2)}});let d=new _e;return d.setAttribute("position",new Jt(l,3)),d.setAttribute("uv",new Jt(c,2)),d.setIndex(h),d.computeVertexNormals(),d}cornerRanges(t=1/160,e=6){let n=this.K.map(a=>Math.abs(a)>t),i=[],r=0,o=n.findIndex(a=>!a);o<0&&(o=0);for(let a=0;a<this.n;a++){let l=(o+a)%this.n;if(n[l]&&!n[(l-1+this.n)%this.n]){let c=l,h=0;for(;n[(c+1)%this.n]&&h<this.n;)c=(c+1)%this.n,h++;let u=Math.sign(this.K[(l+Math.floor(h/2))%this.n]);i.push({a:(l-e+this.n)%this.n,b:(c+e)%this.n,side:u,len:h+2*e,peak:Math.max(...Array.from({length:h+1},(f,d)=>Math.abs(this.K[(l+d)%this.n])))})}}return i}};var sn={violet:"#6d5bff",deep:"#2b1e8f",bg:"#05060d",bg2:"#0a0c1a",ink:"#f4f5f9"};function rf(s,t,e,n,i=.08){let r=s.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=(Math.random()-.5)*n;o[a]=Math.max(0,Math.min(255,o[a]+l)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+l)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+l))}s.putImageData(r,0,0)}function of(s){let t=document.createElement("canvas");t.width=256,t.height=512;let e=t.getContext("2d");e.fillStyle="#ecebe6",e.fillRect(0,0,256,256),e.fillStyle=sn.violet,e.fillRect(0,256,256,256);for(let r=0;r<1400;r++){e.fillStyle=`rgba(20,20,22,${Math.random()*.1})`;let o=Math.random()*256,a=Math.random()*512,l=Math.random()*3+.5;e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill()}let n=e.createLinearGradient(0,0,256,0);n.addColorStop(0,"rgba(0,0,0,0.18)"),n.addColorStop(.25,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,0.05)"),e.fillStyle=n,e.fillRect(0,0,256,512),rf(e,256,512,18);let i=new wn(t);return i.colorSpace=oe,i.wrapS=i.wrapT=Qe,i.anisotropy=s.capabilities.getMaxAnisotropy(),i}function af(s,t=12,e=2){let i=document.createElement("canvas");i.width=t*64,i.height=e*64;let r=i.getContext("2d");for(let a=0;a<e;a++)for(let l=0;l<t;l++)r.fillStyle=(l+a)%2?"#111":"#efefef",r.fillRect(l*64,a*64,64,64);rf(r,i.width,i.height,14);let o=new wn(i);return o.colorSpace=oe,o.anisotropy=s.capabilities.getMaxAnisotropy(),o}function lf(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,128,128),e.strokeStyle="#fff",e.lineWidth=3;for(let i=-128;i<256;i+=32)e.beginPath(),e.moveTo(i,0),e.lineTo(i+128,128),e.stroke(),e.beginPath(),e.moveTo(i+128,0),e.lineTo(i,128),e.stroke();let n=new wn(t);return n.wrapS=n.wrapT=Qe,n.anisotropy=s.capabilities.getMaxAnisotropy(),n}function v_(s,t,e,n,i,r,o=.18){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=i*(1-o*2),h=r*(1-o*2),u=Math.min(c/a,h/l),f=a*u,d=l*u;s.drawImage(t,e+(i-f)/2,n+(r-d)/2,f,d)}function cf(s,t){let i=[];t.sponsors.forEach(l=>{i.push({img:t.solo,bg:sn.violet}),i.push({img:l,bg:sn.bg2})});let r=document.createElement("canvas");r.width=640*i.length,r.height=240;let o=r.getContext("2d");i.forEach((l,c)=>{let h=c*640;if(o.fillStyle=l.bg,o.fillRect(h,0,640,240),l.bg===sn.violet){let u=o.createLinearGradient(h,0,h+640,240);u.addColorStop(0,sn.violet),u.addColorStop(1,sn.deep),o.fillStyle=u,o.fillRect(h,0,640,240)}l.img&&v_(o,l.img,h,0,640,240,.16),o.fillStyle="rgba(255,255,255,0.12)",o.fillRect(h+640-3,0,3,240)});let a=new wn(r);return a.colorSpace=oe,a.wrapS=Qe,a.anisotropy=s.capabilities.getMaxAnisotropy(),a.userData={aspect:r.width/r.height},a}function Wo(s,{logo:t,text:e,w:n=2048,h:i=256,bg:r=sn.bg,accent:o=!0,font:a="Anton"}){let l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d");c.fillStyle=r,c.fillRect(0,0,n,i),o&&(c.fillStyle=sn.violet,c.fillRect(0,i-i*.08,n,i*.08));let h=i*.3;if(t){let f=i*.62,d=t.naturalWidth||t.width,x=t.naturalHeight||t.height,v=d*f/x;c.drawImage(t,h,(i-f)/2-i*.03,v,f),h+=v+i*.4}e&&(c.fillStyle=sn.ink,c.font=`${Math.round(i*.5)}px "${a}", Impact, sans-serif`,c.textBaseline="middle",c.fillText(e,h,i*.47));let u=new wn(l);return u.colorSpace=oe,u.anisotropy=s.capabilities.getMaxAnisotropy(),u}function hf(s=1280,t=720){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Gc(s,{logo:t,title:e,sub:n}){let i=s.getContext("2d"),r=s.width,o=s.height;if(i.fillStyle="#050507",i.fillRect(0,0,r,o),t){let a=r*.4,l=a*(t.naturalHeight||t.height)/(t.naturalWidth||t.width);i.drawImage(t,(r-a)/2,o*.2,a,l)}i.textAlign="center",i.fillStyle="#ffffff",e&&(i.font=`${Math.round(o*.1)}px "Anton", Impact, sans-serif`,i.fillText(e.toUpperCase(),r/2,o*.68)),n&&(i.font=`600 ${Math.round(o*.05)}px "Inter", sans-serif`,i.fillStyle="#a4a7b4",i.fillText(n,r/2,o*.8))}function uf(s,t,e){let n=document.createElement("canvas");n.width=s,n.height=t;let i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,s,t),i.fillStyle="#fff",i.font=`${t*.95}px "Anton", Impact, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(e,s/2,t/2+t*.05);let r=i.getImageData(0,0,s,t).data,o=[];for(let a=0;a<t;a++){o.push([]);for(let l=0;l<s;l++)o[a].push(r[(a*s+l)*4]>110?1:0)}return o}var y_=`
float srtHash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float srtNoise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(srtHash(i),srtHash(i+vec2(1.,0.)),u.x), mix(srtHash(i+vec2(0.,1.)),srtHash(i+vec2(1.,1.)),u.x), u.y); }
`;function ff(s,t=.12,e=.31,n=!1){return s.onBeforeCompile=i=>{n&&(i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`)),i.uniforms.uMacro={value:t},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uMacro;
`+(n?`varying vec3 vWPos;
`:"")+y_).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  vec4 s2 = texture2D( map, vMapUv * ${e.toFixed(3)} + vec2(0.37, 0.71) );
  float nb = srtNoise(vMapUv * 0.17);
  sampledDiffuseColor = mix(sampledDiffuseColor, s2, smoothstep(0.3, 0.7, nb));
  float macro = srtNoise(vMapUv * 0.045) * 0.6 + srtNoise(vMapUv * 0.011) * 0.4;
  sampledDiffuseColor.rgb *= mix(1.0 - uMacro, 1.0 + uMacro, macro);
  ${n?`float dC = length((vWPos.xz - vec2(20.0, 160.0)) * vec2(0.8, 1.15));
  float near = 1.0 - smoothstep(420.0, 560.0, dC);
  float stripe = step(0.5, fract(vWPos.x / 14.0));
  sampledDiffuseColor.rgb *= 1.0 + near * (stripe - 0.5) * 0.14;
  float field = srtNoise(vWPos.xz / 160.0);
  sampledDiffuseColor.rgb *= mix(vec3(1.0), mix(vec3(1.08, 1.02, 0.86), vec3(0.88, 0.95, 0.9), field), 1.0 - near);`:""}
  diffuseColor *= sampledDiffuseColor;
#endif`)},s.customProgramCacheKey=()=>"antitile"+t+e+n,s}function Wc(s,{repeat:t=1,rough:e=1,normalScale:n=1,color:i=16777215,macro:r=.12,envI:o=1}={}){let a=new ie({map:s.diff,normalMap:s.nor,roughnessMap:s.rough,roughness:e,metalness:0,color:i,envMapIntensity:o});return a.normalScale.set(n,n),ff(a,r)}function An(s,t){s.renderOrder=t;let e=s.material;return e.depthWrite=!1,e.polygonOffset=!1,s}function df({scene:s,renderer:t,track:e,tex:n,logos:i,quality:r}){let o={walls:[],screens:[],updatables:[]},a=t.capabilities.getMaxAnisotropy();for(let O in n)for(let U in n[O]){let V=n[O][U];V.wrapS=V.wrapT=Qe,V.anisotropy=a,U==="diff"&&(V.colorSpace=oe)}let l=e.n,c=7e3,h=new Xe(c,c,1,1);h.rotateX(-Math.PI/2);let u=h.attributes.uv;for(let O=0;O<u.count;O++)u.setXY(O,u.getX(O)*c/5,u.getY(O)*c/5);let f=ff(new ie({map:n.grass.diff,normalMap:n.grass.nor,roughnessMap:n.grass.rough,color:10273916,envMapIntensity:.6}),.2,.31,!0),d=An(new Dt(h,f),-10);d.receiveShadow=!0,d.position.y=-.02,s.add(d),o.ground=d;let x=e.cornerRanges(1/160,10),v=e.cornerRanges(1/85,4),m=new Float32Array(l),p=new Float32Array(l),M=new Int8Array(l);x.forEach(O=>{let U=1/O.peak,V=U<70;for(let B=0;B<=O.len;B++){let tt=(O.a+B)%l,Q=Math.sin(Math.PI*B/O.len),st=-O.side;M[tt]=st,V?m[tt]=Math.max(m[tt],Q*Math.min(32,1400/U)):p[tt]=Math.max(p[tt],Q*10)}});let w=(O,U=8)=>{let V=new Float32Array(l);for(let B=0;B<l;B++){let tt=0,Q=0;for(let st=-U;st<=U;st++){let rt=1-Math.abs(st)/(U+1);tt+=O[(B+st+l)%l]*rt,Q+=rt}V[B]=tt/Q}return V},_=w(m,10),C=w(p,10),b=e.halfWidth,A=1.3,S=b+1.6,g=Wc(n.pit,{macro:.1,color:11908533});g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-1;for(let O of[-1,1]){let U=e.ribbon({from:O*b,to:B=>O*(S+(M[B]===O?C[B]:0)),y:.006,uScale:4,vScale:4}),V=An(new Dt(U,g),-8);V.receiveShadow=!0,s.add(V)}let y=Wc(n.gravel,{macro:.1,color:14207920,normalScale:1.2});y.polygonOffset=!0,y.polygonOffsetFactor=-1,y.polygonOffsetUnits=-1;for(let O of[-1,1]){let U=e.ribbon({from:B=>O*(S+(M[B]===O?C[B]:0)),to:B=>O*(S+(M[B]===O?C[B]+_[B]:0)+.001),y:.004,uScale:3,vScale:3}),V=An(new Dt(U,y),-9);V.receiveShadow=!0,s.add(V)}o.barrierOffset=(O,U)=>S+6+(M[O]===U?C[O]+_[O]:0);let E={a:e.startS-160,b:e.startS+80,rIn:90,rOut:90,wall:14.3,inner:14.6,outer:25.6};o.pit=E;let L=O=>(O=Math.min(1,Math.max(0,O)),O*O*(3-2*O));o.pitZone=O=>{let U=e.forwardDist(E.a-E.rIn,O),V=E.b-E.a,B=E.rIn+V+E.rOut;return U>B?null:U<E.rIn?{zone:"in",e:L(U/E.rIn)}:U<E.rIn+V?{zone:"pit",e:1}:{zone:"out",e:L(1-(U-E.rIn-V)/E.rOut)}},o.rampEdges=O=>({inner:7.6+7*O,outer:11.6+14*O});{let U=[],V=[],B=[],tt=[],Q=e.line,st=0;for(let F=0;F<=l;F++){let P=F%l;F>0&&(st+=e.step/5);let G=e.P[P],q=e.N[P];for(let Y=0;Y<=10;Y++){let ot=-b+2*b*Y/10;U.push(G.x+q.x*ot,.012,G.z+q.z*ot),V.push((ot+b)/5,st);let it=Math.abs(ot-Q[P]),Rt=Math.exp(-it*it/3.2)*(.25+.75*Math.min(1,Math.abs(e.K[P])*60)),z=Math.max(0,(Math.abs(ot)-b+1.2)/1.2)*.12,mt=1-Rt*.32-z;B.push(mt,mt,mt*1.01)}if(F>0){let Y=(F-1)*11,ot=F*11;for(let it=0;it<10;it++)tt.push(Y+it,Y+it+1,ot+it,Y+it+1,ot+it+1,ot+it)}}let rt=new _e;rt.setAttribute("position",new Jt(U,3)),rt.setAttribute("uv",new Jt(V,2)),rt.setAttribute("color",new Jt(B,3)),rt.setIndex(tt),rt.computeVertexNormals();let ht=rt.attributes.normal;for(let F=0;F<ht.count;F++)ht.getY(F)<0&&ht.setXYZ(F,-ht.getX(F),-ht.getY(F),-ht.getZ(F));let Z=Wc(n.asphalt,{macro:.08,color:11119017,normalScale:1,envI:.9});Z.vertexColors=!0;let N=An(new Dt(rt,Z),-7);N.receiveShadow=!0,s.add(N)}{let O=new ie({color:15329764,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(let U of[-1,1]){let V=e.ribbon({from:U*(b-.45),to:U*(b-.2),y:.016}),B=An(new Dt(V,O),-6);B.receiveShadow=!0,s.add(B)}}{let O=of(t),U=new ie({map:O,roughness:.55,envMapIntensity:.8});v.forEach(V=>{for(let B of[V.side,-V.side]){if(!(B===V.side)&&1/V.peak>75)continue;let Q=[[0,.02],[.25,.07],[.55,.095],[.85,.07],[1,.02]],st=[];for(let Z=0;Z<Q.length-1;Z++){let[N,F]=Q[Z],[P,G]=Q[Z+1];st.push(e.ribbon({from:B*(b-.1+N*A),to:B*(b-.1+P*A),yFrom:F,yTo:G,uScale:A,vScale:2.4,range:[V.a,V.a+V.len]}))}let rt=uc(st);rt.computeVertexNormals();let ht=new Dt(rt,U);ht.receiveShadow=!0,ht.castShadow=!1,s.add(ht)}})}let k=cf(t,i);{let O=new ie({color:12368563,roughness:.92,side:Ge}),U=new ie({map:k,roughness:.6,side:Ge,envMapIntensity:.6}),V=k.userData.aspect*1,B=e.idx(E.b+E.rOut+4),tt=e.idx(E.a-E.rIn-4);for(let Q of[-1,1]){let st=P=>Q*o.barrierOffset(P,Q),rt=Q>0?[B,tt<B?tt+l:tt]:null,ht=new Dt(e.wall({offset:st,h0:0,h1:.9,range:rt}),O);ht.receiveShadow=!0,ht.castShadow=!0,s.add(ht);let Z=e.wall({offset:P=>st(P)+Q*.02*-1,h0:.95,h1:1.95,vScale:V,flipU:Q>0,range:rt}),N=new Dt(Z,U);N.castShadow=!0,N.receiveShadow=!0,s.add(N);let F=new Dt(e.ribbon({from:P=>st(P)-.15,to:P=>st(P)+.15,y:.9,range:rt}),O);s.add(F)}for(let[Q,st]of[[E.a-E.rIn,E.rIn+2],[E.b-2,E.rOut+6]]){let rt=e.idx(Q),ht=rt+Math.round(st/e.step),Z=G=>(o.pitZone(G*e.step)||{e:0}).e,N=e.ribbon({from:G=>o.rampEdges(Z(G)).inner,to:G=>o.rampEdges(Z(G)).outer,y:.007,uScale:4,vScale:4,range:[rt,ht]}),F=An(new Dt(N,g),-8);F.receiveShadow=!0,s.add(F);let P=new Dt(e.wall({offset:G=>o.rampEdges(Z(G)).outer+.6,h0:0,h1:.9,range:[rt,ht]}),O);P.castShadow=!0,P.receiveShadow=!0,s.add(P)}}{let O=new ie({color:2763306,metalness:.6,roughness:.5,alphaMap:lf(t),transparent:!0,alphaTest:.35,side:Ge,depthWrite:!0});O.alphaMap.repeat.set(1,1);let U=e.idx(e.startS-210),V=e.idx(e.startS+125);for(let B of[-1]){let tt=P=>B*(o.barrierOffset(P,B)+.25),Q=e.wall({offset:tt,h0:2,h1:5.2,vScale:1.2,range:[U,V<U?V+l:V]}),st=Q.attributes.uv;for(let P=0;P<st.count;P++)st.setY(P,st.getY(P)*3.2/1.2);let rt=new Dt(Q,O);s.add(rt);let ht=new go(.06,.06,5.4,6);ht.translate(0,2.7,0);let Z=Math.floor((V-U+l)%l/3),N=new li(ht,new ie({color:3815994,metalness:.7,roughness:.4}),Z),F=new Ot;for(let P=0;P<Z;P++){let G=(U+P*3)%l,q=e.P[G],Y=e.N[G],ot=tt(G);F.makeTranslation(q.x+Y.x*ot,0,q.z+Y.z*ot),N.setMatrixAt(P,F)}N.castShadow=!0,s.add(N)}}{let O=e.frame(e.startS),U=new Xe(2*b,1.6);U.rotateX(-Math.PI/2);let V=new Dt(U,new ie({map:af(t,14,2),roughness:.7,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));V.position.copy(O.p).setY(.02),V.rotation.y=Math.atan2(-O.t.x,-O.t.z),An(V,-5),V.receiveShadow=!0,s.add(V);let B=new Le,tt=new ie({color:1710882,metalness:.7,roughness:.35}),Q=2*(o.barrierOffset(e.idx(e.startS),1)+.6);for(let P of[-1,1]){let G=new Dt(new me(.9,9,.9),tt);G.position.set(P*Q/2,4.5,0),G.castShadow=!0,B.add(G)}let st=new Dt(new me(Q+.9,2.4,1.1),tt);st.position.y=8.2,st.castShadow=!0,B.add(st);let rt=Wo(t,{logo:i.solo,text:"STAGIONE 2027",w:2048,h:160}),ht=new Dt(new Xe(Q*.92,Q*.92*160/2048),new De({map:rt,toneMapped:!1}));ht.position.set(0,8.2,.62),B.add(ht);let Z=ht.clone();Z.position.z=-.62,Z.rotation.y=Math.PI,B.add(Z);let N=new ie({color:2228224,emissive:16718362,emissiveIntensity:0});o.startLights=[];for(let P=0;P<5;P++)for(let G=0;G<2;G++){let q=new Dt(new mo(.22,20),N.clone());q.position.set(-2.4+P*1.2,6.5-G*.55,.56);let Y=new Dt(new me(.9,1.4,.5),tt);Y.position.set(-2.4+P*1.2,6.25,.25),B.add(Y),B.add(q),G===0&&o.startLights.push(q)}B.position.copy(O.p),B.rotation.y=Math.atan2(-O.t.x,-O.t.z),s.add(B),o.gantry=B;let F=new ie({color:15658730,roughness:.75,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});for(let P=0;P<12;P++){let G=e.startS-10-P*7,q=(P%2?1:-1)*2.8,Y=e.frame(G),ot=new Xe(2.2,.18);ot.rotateX(-Math.PI/2);let it=new Dt(ot,F);it.position.copy(Y.p).addScaledVector(Y.n,q).setY(.02),it.rotation.y=Math.atan2(-Y.t.x,-Y.t.z),An(it,-5),s.add(it)}}{let tt=e.startS+20,Q=e.frame(tt),st=-(o.barrierOffset(e.idx(tt),-1)+7),rt=new Le,ht=new ie({color:11052962,roughness:.9}),Z=[];for(let dt=0;dt<16;dt++){let I=new me(170,.5*(dt+1),.85);I.translate(0,.5*(dt+1)/2,-dt*.85),Z.push(I)}let N=new Dt(uc(Z),ht);N.castShadow=!0,N.receiveShadow=!0,rt.add(N);let F=.5,P=Math.floor(170/F),G=uf(P,16,"SOLO RACING TEAM"),q=new me(.44,.42,.42);q.translate(0,.21,0);let Y=new li(q,new ie({roughness:.5}),P*16),ot=new Ot,it=new At(sn.violet),Rt=new At("#f0f0f0"),z=new At(sn.deep),mt=0;for(let dt=0;dt<16;dt++)for(let I=0;I<P;I++){ot.makeTranslation(-170/2+F/2+I*F,.5*(dt+1),-dt*.85+.1),Y.setMatrixAt(mt,ot);let T=G[15-dt][I];Y.setColorAt(mt,T?Rt:dt%5===0?z:it),mt++}Y.castShadow=!0,Y.receiveShadow=!0,rt.add(Y);let pt=.5*16+7,wt=new Dt(new me(176,.5,16*.85+6),new ie({color:14606046,roughness:.6,metalness:.2}));wt.position.set(0,pt,-16*.85/2+1.5),wt.castShadow=!0,wt.receiveShadow=!0,rt.add(wt);let vt=new Dt(new Xe(176,2.2),new De({map:Wo(t,{logo:i.solo,text:"PRESENTAZIONE STAGIONE 2027",w:4096,h:220}),toneMapped:!1}));vt.position.set(0,pt-.6,1.5+3.3),rt.add(vt);for(let dt=0;dt<=6;dt++){let I=new Dt(new me(.6,pt,.6),ht);I.position.set(-170/2+dt*170/6,pt/2,-16*.85-.5),I.castShadow=!0,rt.add(I)}let kt=new Dt(new me(170,pt,.4),ht);kt.position.set(0,pt/2,-16*.85-.8),kt.castShadow=!0,kt.receiveShadow=!0,rt.add(kt),rt.position.copy(Q.p).addScaledVector(Q.n,st),rt.rotation.y=Math.atan2(-Q.t.z,Q.t.x),s.add(rt),o.grandstand=rt}{let O=e.startS-40,U=e.frame(O),V=new Le,B=240,tt=18,Q=5,st=9.5,rt=o.barrierOffset(e.idx(O),1)+12,ht=new Dt(new Xe(B,11),g);ht.rotation.x=-Math.PI/2,ht.position.set(0,.008,-5.5+0),ht.receiveShadow=!0,An(ht,-8),V.add(ht);let Z=new Dt(new Xe(B,.2),new ie({color:15329764,roughness:.8}));Z.rotation.x=-Math.PI/2,Z.position.set(0,.02,-5.5),An(Z,-6),V.add(Z);let N=new ie({color:2829622,roughness:.7,metalness:.1}),F=new Dt(new me(B,Q,tt),N);F.position.set(0,Q/2,tt/2+.2),F.castShadow=!0,F.receiveShadow=!0,V.add(F);let P=new ie({color:1381916,roughness:.6,metalness:.3}),G=new ie({color:657938,emissive:new At(sn.violet),emissiveIntensity:.35,roughness:.4}),q=20;for(let pt=0;pt<q;pt++){let wt=pt%5===2||pt%7===4,vt=new Dt(new Xe(B/q-2.2,3.8),wt?G:P);vt.position.set(-B/2+(pt+.5)*B/q,1.95,.1),vt.rotation.y=Math.PI,V.add(vt)}let Y=new $e({color:1712693,metalness:.1,roughness:.04,envMapIntensity:1.4,clearcoat:1,clearcoatRoughness:.05}),ot=new Dt(new me(B,st-Q,tt-3),Y);ot.position.set(0,Q+(st-Q)/2,(tt-3)/2+.5),ot.castShadow=!0,V.add(ot);for(let pt=0;pt<=24;pt++){let wt=new Dt(new me(.25,st-Q,.3),N);wt.position.set(-B/2+pt*B/24,Q+(st-Q)/2,.4),V.add(wt)}let it=new Dt(new me(B+2,.6,tt+4),new ie({color:14277081,roughness:.6}));it.position.set(0,st+.3,tt/2),it.castShadow=!0,V.add(it);let Rt=new Dt(new Xe(70,70*220/4096*2),new De({map:Wo(t,{logo:i.solo,text:"RACING TEAM \xB7 PIT",w:4096,h:440}),toneMapped:!1}));Rt.position.set(-40,st+2.6,-.4),Rt.rotation.y=Math.PI,V.add(Rt);let z=new Dt(new me(70,4.4,.4),N);z.position.set(-40,st+2.6,0),V.add(z);let mt=new Dt(new me(B,1.1,.5),new ie({color:13223872,roughness:.9}));mt.position.set(0,.55,-11.3),mt.castShadow=!0,V.add(mt),V.position.copy(U.p).addScaledVector(U.n,rt),V.rotation.y=Math.atan2(-U.t.z,U.t.x),s.add(V),o.pits=V}if(r!=="light"){let O=new xo(1,3),U=O.attributes.position,V=new D;for(let ot=0;ot<U.count;ot++){V.fromBufferAttribute(U,ot);let it=1+Math.sin(V.x*7.1+V.z*2.3)*Math.cos(V.y*6.3)*Math.sin(V.z*8.7+V.x)*.16+(Math.random()-.5)*.08;V.multiplyScalar(it),U.setXYZ(ot,V.x,V.y,V.z)}O.computeVertexNormals();let B=38,tt=46,Q=2,st=B*tt*Q,rt=new li(O,new ie({color:5995326,roughness:1}),st),ht=new Ot,Z=new Oe,N=new D,F=new D,P=new At,G=0,q=7,Y=()=>(q=q*16807%2147483647,q/2147483647);for(let ot=0;ot<B;ot++){let it=ot/B*Math.PI*2+Y()*.12,Rt=640+Y()*380,z=20+Math.cos(it)*Rt*1.15,mt=160+Math.sin(it)*Rt*.85,pt=40+Y()*70,wt=1+Y()*1.6,vt=Y()*Math.PI;for(let kt=0;kt<tt;kt++){let dt=Math.sqrt(Y())*pt,I=Y()*Math.PI*2,T=Math.cos(I)*dt*wt,K=Math.sin(I)*dt,at=z+T*Math.cos(vt)-K*Math.sin(vt),ct=mt+T*Math.sin(vt)+K*Math.cos(vt),nt=9+Y()*11,Ct=.21+Y()*.07,xt=.17+Y()*.08;for(let St=0;St<Q;St++){let Yt=nt*(.32+Y()*.14);F.set(at+(Y()-.5)*nt*.4,nt*(.5+St*.2),ct+(Y()-.5)*nt*.4),N.set(Yt,Yt*(.9+Y()*.3),Yt),Z.setFromAxisAngle(new D(0,1,0),Y()*6),ht.compose(F,Z,N),rt.setMatrixAt(G,ht),P.setHSL(Ct,.4,xt+St*.02),rt.setColorAt(G,P),G++}}}rt.castShadow=!0,rt.receiveShadow=!0,s.add(rt)}let H=new De({color:0,blending:ln,transparent:!1,opacity:0,fog:!1,toneMapped:!1});return o.makeScreen=(O,U,{width:V=16,title:B="",sub:tt=""}={})=>{let Q=V*9/16,st=new Le,rt=Math.max(.35,V*.016),ht=new ie({color:1381915,metalness:.55,roughness:.5}),Z=new Dt(new me(V+rt*2,Q+rt*2,.9),ht);Z.position.z=-.3,Z.castShadow=!0,st.add(Z);let N=.45,F=.375;for(let[pt,wt,vt,kt]of[[V+rt*2,rt,0,Q/2+rt/2],[V+rt*2,rt,0,-Q/2-rt/2],[rt,Q,-V/2-rt/2,0],[rt,Q,V/2+rt/2,0]]){let dt=new Dt(new me(pt,wt,N),ht);dt.position.set(vt,kt,F),dt.castShadow=!0,st.add(dt)}let P=hf(1280,720);Gc(P,{logo:i.solo,title:B,sub:tt});let G=new wn(P);G.colorSpace=oe,G.anisotropy=a;let q=new De({map:G,toneMapped:!1}),Y=new Dt(new Xe(V,Q),q);Y.position.z=.42,st.add(Y);let ot=Math.max(1,O.y-Q/2-rt+.3),it=V>18?3:2,Rt=new me(.12,ot,.12),z=new me(.9,.06,.06);for(let pt=0;pt<it;pt++){let wt=it===2?(pt?1:-1)*(V/2-V*.12):(pt-1)*(V/2-V*.1),vt=new Le;for(let[kt,dt]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]]){let I=new Dt(Rt,ht);I.position.set(kt,-ot/2,dt),I.castShadow=!0,vt.add(I)}for(let kt=.5;kt<ot;kt+=1)for(let dt of[-.4,.4]){let I=new Dt(z,ht);I.position.set(0,-kt,dt),I.rotation.z=.85,I.castShadow=!0,vt.add(I)}vt.position.set(wt,-Q/2-rt+.3,-.9),st.add(vt)}st.position.copy(O),st.lookAt(O.clone().add(U)),s.add(st);let mt={group:st,width:V,height:Q,canvas:P,texture:G,mesh:Y,center:O.clone(),normal:U.clone().normalize()};return mt.setLive=pt=>{Y.material=pt?H:q},mt.redraw=(pt,wt)=>{Gc(P,{logo:i.solo,title:pt,sub:wt}),G.needsUpdate=!0},o.screens.push(mt),mt},o}var ws=0,Ui=s=>Math.round(s*10)/10,we={helmet:s=>`<path d="M-32 10a32 30 0 0 1 64 0z" fill="${s}"/><rect x="-40" y="8" width="80" height="9" rx="4.5" fill="${s}"/><rect x="-5" y="-21" width="10" height="30" rx="4" fill="#0b0d1c" opacity=".35"/>`,gear:(s,t=22)=>{let e="";for(let n=0;n<8;n++)e+=`<rect x="-6" y="${-t-9}" width="12" height="14" rx="2" fill="${s}" transform="rotate(${n*45})"/>`;return`${e}<circle r="${t}" fill="${s}"/><circle r="${t*.42}" fill="#0b0d1c"/>`},warn:s=>`<path d="M0-32L34 26H-34Z" fill="none" stroke="${s}" stroke-width="7" stroke-linejoin="round"/><rect x="-4" y="-12" width="8" height="22" rx="3" fill="${s}"/><circle cy="18" r="4.5" fill="${s}"/>`,compass:s=>`<g fill="none" stroke="${s}" stroke-width="6" stroke-linecap="round"><path d="M0-26L-20 28M0-26L20 28"/><path d="M-26 6a32 32 0 0 0 52 0"/></g><circle cy="-28" r="7" fill="${s}"/>`,theodolite:s=>`<g stroke="${s}" stroke-width="5" stroke-linecap="round" fill="none"><path d="M0 0L-22 32M0 0L22 32M0 0V32"/></g><rect x="-16" y="-26" width="32" height="22" rx="5" fill="${s}"/><rect x="12" y="-21" width="14" height="10" rx="3" fill="${s}"/>`,leaf:s=>`<path d="M-26 26C-26-8 6-28 28-28C28 2 8 26-26 26Z" fill="${s}"/><path d="M-20 20L16-16" stroke="#0b0d1c" stroke-width="4" stroke-linecap="round" opacity=".45"/>`,rocks:s=>`<path d="M-34 26L-10-16L4 4L16-10L36 26Z" fill="${s}"/><path d="M-10-16L-2-2L4 4" fill="none" stroke="#0b0d1c" stroke-width="3" opacity=".4"/>`,ruler:s=>`<rect x="-34" y="-12" width="68" height="24" rx="4" fill="${s}"/><g stroke="#0b0d1c" stroke-width="3" opacity=".5">${[-24,-14,-4,6,16,26].map((t,e)=>`<path d="M${t}-12V${e%2?-2:2}"/>`).join("")}</g>`,book:s=>`<path d="M0-18C-12-26-26-26-34-22V24C-26 20-12 20 0 28C12 20 26 20 34 24V-22C26-26 12-26 0-18Z" fill="${s}"/><path d="M0-18V28" stroke="#0b0d1c" stroke-width="3" opacity=".4"/>`,scroll:s=>`<rect x="-30" y="-20" width="60" height="40" rx="4" fill="${s}"/><rect x="-36" y="-24" width="10" height="48" rx="5" fill="${s}"/><rect x="26" y="-24" width="10" height="48" rx="5" fill="${s}"/><g stroke="#0b0d1c" stroke-width="3" opacity=".4"><path d="M-18-8H18M-18 2H18M-18 12H6"/></g>`,univ:s=>`<path d="M0-32L38-12H-38Z" fill="${s}"/>${[-28,-14,0,14,28].map(t=>`<rect x="${t-4}" y="-8" width="8" height="28" fill="${s}"/>`).join("")}<rect x="-40" y="22" width="80" height="8" rx="2" fill="${s}"/>`,cap:s=>`<path d="M0-22L44-6L0 10L-44-6Z" fill="${s}"/><path d="M-26 2V18C-14 28 14 28 26 18V2L0 12Z" fill="${s}" opacity=".85"/><path d="M34-2V20" stroke="${s}" stroke-width="3"/><circle cx="34" cy="22" r="4" fill="${s}"/>`,person:s=>`<circle cy="-30" r="12" fill="${s}"/><path d="M-20 34V0C-20-12-12-16 0-16S20-12 20 0V34Z" fill="${s}"/>`,bike:s=>`<g fill="none" stroke="${s}" stroke-width="5"><circle cx="-24" cy="10" r="13"/><circle cx="26" cy="10" r="13"/></g><path d="M-24 10L-6-8H14L26 10M-10-8L-2-20H18L26-8" fill="none" stroke="${s}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><path d="M-14-12H16L24-4H-8Z" fill="${s}"/>`},Xc=(s,t,e=46)=>`<circle r="${e}" fill="#0b0d1c" stroke="${t}" stroke-width="3"/><g transform="scale(${Ui(e/58)})">${s}</g>`;function pf(s,t,e,n,i,r){let o="";for(let a=-2;a<n/40+3;a++)o+=`<path d="M${a*40} ${i}L${a*40+20} 0H${a*40+40}L${a*40+20} ${i}Z" fill="${r}"/>`;return`<clipPath id="${s}"><rect x="${t}" y="${e}" width="${n}" height="${i}" rx="${i/2}"/></clipPath>
  <g clip-path="url(#${s})"><rect x="${t}" y="${e}" width="${n}" height="${i}" fill="#0b0d1c"/><g transform="translate(${t} ${e})"><g class="scrollx" style="--dx:-40px;--d:.9s">${o}</g></g></g>`}var xi=(s,t,e)=>`<g stroke="${e}" stroke-width="1" opacity=".10">${Array.from({length:Math.ceil(s/40)},(n,i)=>`<path d="M${i*40} 0V${t}"/>`).join("")}${Array.from({length:Math.ceil(t/40)},(n,i)=>`<path d="M0 ${i*40}H${s}"/>`).join("")}</g>`,_i=(s,t,e)=>`<svg class="ig" viewBox="0 0 ${s} ${t}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">${e}</svg>`,mf=(s,t=1)=>`<g transform="scale(${t})"><path d="M0-70L58-48V2C58 42 30 64 0 76C-30 64-58 42-58 2V-48Z" fill="#0b0d1c" stroke="${s}" stroke-width="7" stroke-linejoin="round"/><path class="draw" style="--len:120" d="M-28 2L-6 24L32-20" fill="none" stroke="${s}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g>`,gf=(s,t,e=2,n=2.4)=>Array.from({length:e},(i,r)=>`<circle class="ring" style="animation-duration:${n}s;animation-delay:${Ui(r*n/e)}s" r="${t}" fill="none" stroke="${s}" stroke-width="3"/>`).join("");function M_(s="#ffaa11"){let t="ig"+ ++ws;return _i(600,360,`${xi(600,360,s)}
    <g transform="translate(300 160)">${gf(s,92,2)}<g class="pulse">${mf(s,1.25)}</g></g>
    <g transform="translate(120 96)"><g class="bob">${we.helmet(s)}</g></g>
    <g transform="translate(486 92)"><g class="spin" style="animation-duration:6s">${we.gear(s)}</g></g>
    <g transform="translate(456 68)"><g class="spinr" style="animation-duration:4s">${we.gear(s,11)}</g></g>
    <g transform="translate(108 238)"><g class="blink">${we.warn(s)}</g></g>
    <g transform="translate(492 236)"><g class="bob" style="animation-delay:.6s">${Xc(we.person(s),s,40)}</g></g>
    ${pf(t+"h",40,318,520,22,s)}`)}function S_(s="#ffaa11"){let t=[we.helmet,we.compass,we.theodolite,we.gear,we.leaf,we.rocks,we.ruler],e=t.length,n=132,i=t.map((r,o)=>{let a=-Math.PI/2+o*2*Math.PI/e;return`<g transform="translate(${Ui(Math.cos(a)*n)} ${Ui(Math.sin(a)*n)})"><g class="spinr" style="animation-duration:28s">${Xc(r(s),s,30)}</g></g>`}).join("");return _i(600,360,`${xi(600,360,s)}
    <g transform="translate(300 180)"><g class="spin" style="animation-duration:28s"><circle r="${n}" fill="none" stroke="${s}" stroke-width="2" stroke-dasharray="4 10" opacity=".5"/>${i}</g></g>
    <g transform="translate(300 172)">
      <rect x="-70" y="-80" width="140" height="170" rx="10" fill="#0b0d1c" stroke="${s}" stroke-width="5"/>
      <text y="-30" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="44" fill="${s}">CFP</text>
      <g stroke="${s}" stroke-width="5" stroke-linecap="round" opacity=".55"><path d="M-44-6H44M-44 10H30"/></g>
      <rect x="-44" y="26" width="88" height="12" rx="6" fill="${s}" opacity=".25"/>
      <rect class="fillx" x="-44" y="26" width="88" height="12" rx="6" fill="${s}"/>
      <g transform="translate(46 72)"><g class="spin" style="animation-duration:9s">${we.gear(s,13)}</g></g>
      <g transform="translate(-20 -96)"><text class="rise" text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="22" fill="${s}">+1</text></g>
      <g transform="translate(26 -96)"><text class="rise" style="animation-delay:1.2s" text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="22" fill="${s}">+2</text></g>
    </g>`)}function b_(s="#ffaa11"){let t="ig"+ ++ws,e="M100 230C180 230 200 140 300 140S430 70 500 70",n=[[100,230,we.book,"SCUOLA"],[300,140,we.scroll,"DIPLOMA"],[500,70,we.univ,"UNIVERSIT\xC0"]];return _i(600,360,`${xi(600,360,s)}
    <path d="${e}" fill="none" stroke="${s}" stroke-width="4" opacity=".35"/>
    <path class="flow" d="${e}" fill="none" stroke="${s}" stroke-width="4" stroke-dasharray="10 30"/>
    ${n.map(([i,r,o,a],l)=>`<g transform="translate(${i} ${r})"><g class="step" style="animation-delay:${l*1.1}s">${Xc(o(s),s,44)}</g><text y="76" text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="25" letter-spacing="1" fill="#fff">${a}</text></g>`).join("")}
    <circle r="9" fill="#fff"><animateMotion dur="3.3s" repeatCount="indefinite" path="${e}"/></circle>
    <g transform="translate(500 260)"><g class="toss">${we.cap(s)}</g></g>
    <g transform="translate(150 80)"><g class="bob" style="animation-delay:.8s"><g transform="scale(.7)">${we.book(s)}</g></g></g>`)}function w_(s="#ffaa11"){let t="ig"+ ++ws,e=`<g stroke="${s}" stroke-width="6" fill="none"><path d="M0 0V-250M-14 0V-250M0-250L-14-250"/>${Array.from({length:9},(r,o)=>`<path d="M0 ${-o*28}L-14 ${-o*28-28}"/>`).join("")}</g>`,n=`<g stroke="${s}" stroke-width="5" fill="none"><path d="M-80 0H250M-80 0V14M-60 0L-7-40L250 0"/></g><rect x="-110" y="-6" width="40" height="30" fill="${s}"/>
    <g transform="translate(230 0)"><g class="trolley"><rect x="-14" y="-4" width="28" height="12" fill="#fff"/><g class="sway"><path d="M0 8V100" stroke="#fff" stroke-width="3"/><rect x="-26" y="100" width="52" height="36" rx="3" fill="${s}"/></g></g></g>`,i=[0,1,2].map(r=>`<g transform="translate(${760+r*120} 300)"><g transform="scale(1.35)">${we.person("#fff")}</g><g transform="translate(0 -62)"><g class="bob" style="animation-delay:${r*.4}s">${we.helmet(s)}</g></g><g transform="translate(34 -84)"><g class="pop" style="animation-delay:${r*.8}s"><circle r="16" fill="${s}"/><path d="M-7 0L-2 6L8-6" fill="none" stroke="#0b0d1c" stroke-width="4" stroke-linecap="round"/></g></g></g>`).join("");return _i(1600,420,`${xi(1600,420,s)}
    <g transform="translate(330 370)">${e}<g transform="translate(-7 -250)">${n}</g></g>
    <path d="M560 372H1240" stroke="${s}" stroke-width="4" opacity=".5"/>
    ${i}
    <g transform="translate(1470 210)">${gf(s,100,3,3)}<g class="pulse">${mf(s,1.35)}</g></g>
    ${pf(t+"h",60,390,1480,22,s)}
    <text x="640" y="96" font-family="Anton,Impact,sans-serif" font-size="52" fill="#fff" letter-spacing="1">FORMAZIONE E SICUREZZA SUL LAVORO</text>
    <text x="642" y="140" font-family="Orbitron,monospace" font-weight="900" font-size="26" letter-spacing="1" fill="${s}">CREDITI FORMATIVI \xB7 MONDO SCUOLA</text>`)}function E_(s="#8f80ff"){let t="ig"+ ++ws,e=l=>`<g transform="translate(${l} 330)"><g class="spin" style="animation-duration:.6s"><circle r="26" fill="#0b0d1c" stroke="#fff" stroke-width="6"/><path d="M-26 0H26M0-26V26" stroke="#fff" stroke-width="4"/></g></g>`,n=`<g class="rumble">
      <rect x="560" y="150" width="400" height="160" rx="8" fill="${s}"/>
      <text x="760" y="245" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="54" fill="#0b0d1c" opacity=".75">LOGISTICA</text>
      <path d="M970 310V200H1060L1110 250V310Z" fill="#fff"/><path d="M990 215H1050L1088 250H990Z" fill="#0b0d1c" opacity=".7"/>
      <rect x="560" y="306" width="560" height="14" fill="#0b0d1c"/>
      ${e(640)}${e(720)}${e(1050)}
    </g>`,i=Array.from({length:10},(l,c)=>`<g transform="translate(${c*200} 0)"><path d="M0 360V250" stroke="${s}" stroke-width="5" opacity=".5"/><circle cy="246" r="10" fill="${s}" opacity=".5"/></g>`).join(""),r=Array.from({length:14},(l,c)=>`<rect x="${c*140}" y="386" width="80" height="8" rx="4" fill="#fff" opacity=".7"/>`).join(""),o=`<path d="M0 300C150 200 300 200 450 300S750 200 900 300S1200 200 1350 300S1650 200 1800 300S2100 200 2250 300V360H0Z" fill="${s}" opacity=".14"/>`,a="M80 120C240 30 360 170 470 80";return _i(1600,420,`${xi(1600,420,s)}
    <clipPath id="${t}c"><rect width="1600" height="420"/></clipPath>
    <g clip-path="url(#${t}c)">
      <g class="scrollx" style="--dx:-450px;--d:4.5s">${o}</g>
      <g class="scrollx" style="--dx:-200px;--d:1.6s">${i}</g>
      <rect y="360" width="1600" height="60" fill="#0b0d1c"/>
      <g class="scrollx" style="--dx:-140px;--d:.55s">${r}</g>
      ${n}
      <g opacity=".95"><path d="${a}" fill="none" stroke="${s}" stroke-width="4" opacity=".3"/><path class="flow" d="${a}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="10 30"/>
        <g transform="translate(80 112)"><path d="M0 8C-14-6-14-26 0-26S14-6 0 8Z" fill="${s}"/></g>
        <g transform="translate(470 72)"><g class="bob"><path d="M0 8C-14-6-14-26 0-26S14-6 0 8Z" fill="#fff"/></g></g>
        <circle r="7" fill="#fff"><animateMotion dur="2.6s" repeatCount="indefinite" path="${a}"/></circle></g>
      <text x="1180" y="120" font-family="Anton,Impact,sans-serif" font-size="64" fill="#fff">AUTOTRASPORTO</text>
      <text x="1182" y="168" font-family="Orbitron,monospace" font-weight="900" font-size="32" letter-spacing="2" fill="${s}">E LOGISTICA</text>
    </g>`)}function T_(s="#8f80ff"){let t="ig"+ ++ws,e='<path d="M-24-150H24V-140C14-136 12-120 14-100C40-92 64-70 66-30C68 10 40 50 16 66V78H34V96H-34V78H-16V66C-40 50-68 10-66-30C-64-70-40-92-14-100C-12-120-14-136-24-140Z"/><path d="M-14-128C-54-132-60-86-38-78M14-128C54-132 60-86 38-78" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/><path d="M-60-44H60M-64-10H64" stroke="#0b0d1c" stroke-width="5" opacity=".35"/>',n=Array.from({length:26},(i,r)=>{let o=r*2.4,a=30+r*37%80;return`<circle class="twinkle" style="animation-delay:${Ui(r%7*.25)}s" cx="${Ui(Math.cos(o)*a*.8)}" cy="${Ui(-60+Math.sin(o)*a*.9)}" r="3" fill="#fff"/>`}).join("");return _i(1600,420,`${xi(1600,420,s)}
    <g transform="translate(250 290)">
      <g fill="${s}" color="${s}" opacity=".9">${e}</g>${n}
      <clipPath id="${t}s"><rect x="-130" y="-170" width="260" height="270"/></clipPath>
      <g clip-path="url(#${t}s)"><g class="scan"><rect x="-140" y="-2" width="280" height="4" fill="#fff"/><rect x="-140" y="-40" width="280" height="40" fill="#fff" opacity=".12"/></g></g>
    </g>
    <text x="250" y="416" text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="30" letter-spacing="1" fill="#fff">SCANSIONE 3D</text>
    <path d="M440 220H700" stroke="${s}" stroke-width="5" opacity=".3"/><path class="flow" d="M440 220H700" stroke="#fff" stroke-width="5" stroke-dasharray="14 26"/>
    <path d="M690 200L720 220L690 240" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <g transform="translate(570 160)"><text text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="30" fill="${s}">0,1 mm</text></g>
    <g transform="translate(1000 290)">
      <g stroke="${s}" stroke-width="8" fill="none"><path d="M-170 110V-200H170V110"/><path d="M-170-200H170"/></g>
      <rect x="-150" y="96" width="300" height="14" fill="${s}"/>
      <clipPath id="${t}b"><rect x="-130" y="100" width="260" height="0"><animate attributeName="y" values="100;-170;-170" keyTimes="0;.85;1" dur="6s" repeatCount="indefinite"/><animate attributeName="height" values="0;270;270" keyTimes="0;.85;1" dur="6s" repeatCount="indefinite"/></rect></clipPath>
      <g fill="#fff" color="#fff" opacity=".12">${e}</g>
      <g clip-path="url(#${t}b)" fill="#fff" color="#fff">${e}</g>
      <g><animateTransform attributeName="transform" type="translate" values="0 100;0 -170;0 -170" keyTimes="0;.85;1" dur="6s" repeatCount="indefinite"/>
        <rect x="-170" y="-10" width="340" height="8" fill="${s}" opacity=".7"/>
        <g class="nozzle"><rect x="-16" y="-36" width="32" height="30" rx="4" fill="${s}"/><path d="M-6-6H6L0 4Z" fill="#fff"/></g></g>
    </g>
    <text x="1000" y="416" text-anchor="middle" font-family="Orbitron,monospace" font-weight="900" font-size="30" letter-spacing="1" fill="#fff">STAMPA 3D</text>
    <path d="M1200 220H1290" stroke="${s}" stroke-width="5" opacity=".3"/><path class="flow" d="M1200 220H1290" stroke="#fff" stroke-width="5" stroke-dasharray="14 26"/>
    <text x="1310" y="190" font-family="Anton,Impact,sans-serif" font-size="58" fill="#fff">COPIE</text>
    <text x="1310" y="252" font-family="Anton,Impact,sans-serif" font-size="58" fill="#fff">MUSEALI</text>
    <text x="1312" y="300" font-family="Orbitron,monospace" font-weight="900" font-size="26" letter-spacing="1" fill="${s}">BENI CULTURALI</text>`)}function A_(s="#8f80ff"){let t="ig"+ ++ws,e="M455 160C470 120 540 92 610 88L720 104L782 170C792 225 772 280 722 308L566 312C520 294 478 244 455 160Z",n="M720 104C760 78 860 74 902 104L872 156L782 170Z",i="M990 128L1212 88C1232 88 1238 104 1228 118L1150 168L986 158Z",r=o=>`<g transform="translate(${o} 262)"><circle r="92" fill="none" stroke="#fff" stroke-width="16" opacity=".9"/><circle r="70" fill="none" stroke="${s}" stroke-width="3" opacity=".6"/><g class="spin" style="animation-duration:1.4s"><path d="M0-66V66M-66 0H66M-47-47L47 47M47-47L-47 47" stroke="#fff" stroke-width="4" opacity=".5"/></g><circle r="16" fill="#fff"/></g>`;return _i(1600,420,`
    <defs>
      <pattern id="${t}w" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="22" height="22" fill="#15161f"/><rect width="11" height="11" fill="#2c2e3e"/><rect x="11" y="11" width="11" height="11" fill="#2c2e3e"/>
        <rect width="11" height="3" fill="#41455c"/><rect x="11" y="11" width="11" height="3" fill="#41455c"/>
      </pattern>
      <linearGradient id="${t}g" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".6"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <clipPath id="${t}f"><path d="${e}"/><path d="${n}"/><path d="${i}"/></clipPath>
    </defs>
    ${xi(1600,420,s)}
    <g transform="translate(-10 0)">
      ${r(430)}${r(1130)}
      <path d="M430 262L560 80" stroke="#fff" stroke-width="14" stroke-linecap="round"/>
      <path d="M880 230L1130 262" stroke="#9aa0b5" stroke-width="18" stroke-linecap="round"/>
      <rect x="770" y="170" width="150" height="110" rx="14" fill="#2a2d3d"/>
      <path d="M940 250L1080 214L1112 228L960 270Z" fill="#9aa0b5"/>
      <path d="M902 104L1000 132L992 158L872 156Z" fill="#0b0d1c" stroke="#fff" stroke-width="3"/>
      <path d="M610 88L652 52L704 66L720 104Z" fill="#6d7390" opacity=".55"/>
      <path d="${e}" fill="url(#${t}w)" stroke="${s}" stroke-width="5"/>
      <path d="${n}" fill="url(#${t}w)" stroke="${s}" stroke-width="5"/>
      <path d="${i}" fill="url(#${t}w)" stroke="${s}" stroke-width="5"/>
      <path d="M470 168C520 150 600 140 700 150" fill="none" stroke="${s}" stroke-width="8" stroke-linecap="round"/>
      <g clip-path="url(#${t}f)"><g class="sheen"><rect x="-300" y="40" width="240" height="320" fill="url(#${t}g)" transform="skewX(-20)"/></g></g>
      <g transform="translate(560 120)"><g class="twinkle"><path d="M0-18L5-5L18 0L5 5L0 18L-5 5L-18 0L-5-5Z" fill="#fff"/></g></g>
      <g transform="translate(1180 96)"><g class="twinkle" style="animation-delay:.8s"><path d="M0-14L4-4L14 0L4 4L0 14L-4 4L-14 0L-4-4Z" fill="#fff"/></g></g>
    </g>
    <text x="1270" y="150" font-family="Anton,Impact,sans-serif" font-size="54" fill="#fff">CARENE</text>
    <text x="1270" y="210" font-family="Anton,Impact,sans-serif" font-size="54" fill="#fff">IN CARBONIO</text>
    <text x="1272" y="252" font-family="Orbitron,monospace" font-weight="900" font-size="24" fill="${s}">E VETRORESINA</text><text x="1272" y="284" font-family="Orbitron,monospace" font-weight="900" font-size="24" fill="${s}">PER MOTO</text>`)}var R_=s=>`<ellipse rx="22" ry="7" fill="${s}"/><rect x="-26" y="-3" width="8" height="6" rx="2" fill="${s}"/><path d="M14-13V13" stroke="${s}" stroke-width="4" stroke-linecap="round"/><circle cx="2" r="7" fill="#0b0d1c" stroke="${s}" stroke-width="3"/>`;function C_(s="#8f80ff"){let t="M400 110H1200C1290 110 1340 170 1340 230S1290 350 1200 350H400C310 350 260 290 260 230S310 110 400 110Z",e=[0,1,2].map(i=>`<g><animateMotion dur="7s" begin="${-i*2.3}s" repeatCount="indefinite" rotate="auto" path="${t}"/><g transform="scale(1.5)">${R_(i?"#fff":s)}</g></g>`).join(""),n=Array.from({length:4},(i,r)=>Array.from({length:6},(o,a)=>(a+r)%2?"":`<rect x="${a*16}" y="${r*16}" width="16" height="16" fill="#fff"/>`).join("")).join("");return _i(1600,420,`${xi(1600,420,s)}
    <path d="${t}" fill="none" stroke="#0b0d1c" stroke-width="54"/>
    <path d="${t}" fill="none" stroke="${s}" stroke-width="4" opacity=".6"/>
    <path d="${t}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="20 22" opacity=".35"/>
    <path d="M800 84V136" stroke="#fff" stroke-width="5"/>
    ${e}
    <g transform="translate(800 40)"><path d="M0 0V-6" stroke="#fff"/><g transform="translate(0 -40)"><path d="M0 0V80" stroke="#fff" stroke-width="5"/><g class="wave"><rect x="2" y="0" width="96" height="64" fill="#0b0d1c"/>${`<g transform="translate(2 0)">${n}</g>`}</g></g></g>
    <text x="800" y="222" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="74" fill="#fff">MOTOCLUB</text>
    <text x="800" y="268" text-anchor="middle" font-family="Orbitron,monospace" font-weight="700" font-size="34" letter-spacing="3" fill="${s}">ARGENTA \xB7 44011</text>`)}var I_={sicurezza:M_,crediti:S_,scuola:b_,beta:w_,cocchiola:E_,tryeco:T_,carbon:A_,motoclub:C_};function $c(s,t){let e=I_[s];return e?e(t||void 0):""}var $t=s=>String(s??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Xo=s=>s?/^(https?:|data:|media\/|video\/|audio\/)/.test(s)?s:"media/"+s:"",xf=(s="DA FORNIRE")=>`<span class="ph">${s}</span>`,_f=s=>s!=null&&String(s).trim()!=="",ar=(s,t)=>_f(s)?$t(s):xf(t),vf='<svg viewBox="0 0 100 120" class="sil"><circle cx="50" cy="38" r="22"/><path d="M8 120c2-30 20-46 42-46s40 16 42 46z"/></svg>',Es=(s,t="")=>s?`<div class="photo ${t}" style="background-image:url('${$t(Xo(s))}')"></div>`:`<div class="photo empty ${t}">${vf}${xf("FOTO")}</div>`;function rn(s){let t=document.createElement("div");return t.innerHTML=s.trim(),t.firstElementChild}var Rn={programma(s){let t=s.programma.map((e,n)=>`
      <div class="row" style="--i:${n}">
        <div class="pos">${String(n+1).padStart(2,"0")}</div>
        <div class="time">${e.ora?$t(e.ora):""}</div>
        <div class="what"><div class="v">${$t(e.voce)}</div>${e.sub?`<div class="s">${$t(e.sub)}</div>`:""}</div>
      </div>`).join("");return rn(`<div class="pnl pnl-agenda">
      <div class="side">
        <img class="logo" src="media/logo-white.png" alt="">
        <div class="kicker">${$t(s.evento.data)}</div>
        <div class="big">Programma</div>
        <div class="where">${$t(s.evento.luogo)}${s.evento.citta?", "+$t(s.evento.citta):""}</div>
      </div>
      <div class="tower">${t}</div>
    </div>`)},partner(s){let t=s.beta,e=t.schede.map((n,i)=>`
      <div class="cslot"><div class="card r" data-r="${i+1}">
        <div class="t">${ar(n.titolo,"TITOLO")}</div>
        ${n.grafica?`<div class="igbox">${$c(n.grafica,t.colore)}</div>`:Es(n.foto)}
        <div class="d">${n.testo?$t(n.testo):""}</div>
      </div></div>`).join("");return rn(`<div class="pnl pnl-partner">
      <div class="head">
        <img class="plogo" src="${$t(Xo(t.logo))}" alt="">
        <div class="speaker">
          ${Es(t.relatore.foto,"round")}
          <div><div class="n">${ar(t.relatore.nome,"NOME RELATORE")}</div><div class="ro">${$t(t.relatore.ruolo)}</div></div>
        </div>
      </div>
      ${_f(t.slogan)?`<div class="slogan">${$t(t.slogan)}</div>`:'<div class="gap"></div>'}
      <div class="cards">${e}</div>
    </div>`)},recap(s,{rider:t}={}){let e=s.dati.map((i,r)=>`<div class="stat" style="--i:${r}"><div class="v">${ar(i.valore,"00")}</div><div class="l">${$t(i.etichetta)}</div></div>`).join(""),n=t?`<div class="rider">${Es(s.pilota.foto)}<div class="num">#${$t(s.pilota.numero)}</div><div class="name">${$t(s.pilota.nome)}</div></div>`:s.moto?`<img class="bike" src="${$t(Xo(s.moto))}" alt="">`:"";return rn(`<div class="pnl pnl-recap">
      <div class="left">
        <div class="kicker">${$t(s.etichetta)}</div>
        <div class="title">${$t(s.titolo)}</div>
        ${s.classi?`<div class="chips">${s.classi.map(i=>`<span>${$t(i)}</span>`).join("")}</div>`:""}
        ${s.messaggio?`<div class="msg">${$t(s.messaggio)}</div>`:""}
        <div class="stats">${e}</div>
      </div>
      <div class="right">${n}</div>
    </div>`)},piloti(s){let t=0,e=s.gruppi.map(n=>`
      <div class="grp">
        <div class="cls">${$t(n.classe)}</div>
        <div class="slots">${n.piloti.map(i=>(t++,`
          <div class="slot"><div class="pc r" data-r="${t}">
            ${Es(i.foto)}
            <div class="meta"><span class="num">${i.numero?"#"+$t(i.numero):""}</span><span class="nm">${ar(i.nome,"NOME PILOTA")}</span></div>
          </div></div>`)).join("")}</div>
      </div>`).join("");return rn(`<div class="pnl pnl-piloti">
      <div class="kicker">${$t(s.etichetta)}</div>
      <div class="title">${$t(s.titolo)}</div>
      <div class="groups">${e}</div>
    </div>`)},hype(s){let t=s.dati.map((e,n)=>`<div class="stat" style="--i:${n}"><div class="v">${ar(e.valore,"XX")}</div><div class="l">${$t(e.etichetta)}</div></div>`).join("");return rn(`<div class="pnl pnl-hype">
      <div class="kicker">${$t(s.titolo)} ${$t(s.etichetta)}</div>
      <div class="mystery"><div class="q">?</div>${vf}</div>
      <div class="big">${$t(s.frase)}</div>
      <div class="stats">${t}</div>
    </div>`)},reveal(s){let t=s.righe.map((n,i)=>`<div class="line r l${i+1}" data-r="${i+1}"><div class="yr">${$t(n.anno)}</div><div class="tx">${$t(n.testo)}</div></div>`).join(""),e=s.righe.length+1;return rn(`<div class="pnl pnl-reveal">
      <div class="kicker">Nuovo pilota CIV Sportbike 2027</div>
      <div class="lines">${t}</div>
      <div class="who r" data-r="${e}">
        ${Es(s.foto,"hero")}
        <div class="name">${s.numero?`<span class="num">#${$t(s.numero)}</span>`:""}${$t(s.nome)}</div>
      </div>
    </div>`)},sponsor(s){let t=(s.foto||[]).map((e,n)=>`<div class="tile" style="--k:${n}">${Es(e)}</div>`).join("");return rn(`<div class="pnl pnl-sponsor" style="--sc:${$t(s.colore||"#8f80ff")}">
      <div class="kicker">Ringraziamento sponsor 2026</div>
      <img class="slogo" src="${$t(Xo(s.logo))}" alt="">
      <div class="thx">Grazie</div>
      ${s.grafica?`<div class="igwide">${$c(s.grafica,s.colore)}</div>`:`<div class="tiles">${t}</div>`}
    </div>`)},quiz(){return rn(`<div class="pnl pnl-quiz">
      <div class="kicker">Ultima tappa prima del traguardo</div>
      <div class="big">Quiz a premi</div>
      <div class="sub">Prendete il telefono: tra poco si va in <b>griglia di partenza</b></div>
    </div>`)}};function yf(s){return rn(`<div class="ov-title">
    <img class="logo" src="media/logo-white.png" alt="">
    <div class="kicker">${$t(s.evento.titolo.replace(/\s*\d{4}$/,""))}</div>
    <div class="year">2027</div>
    <div class="meta">${$t(s.evento.data)}, ${$t(s.evento.luogo)}${s.evento.citta?", "+$t(s.evento.citta):""}</div>
  </div>`)}function Mf(s){return rn(`<div class="ov-qr">
    <div class="qk">Gira anche tu</div>
    <div class="qt">Inquadra e sfida la classifica</div>
    <div class="qr">${s}</div>
    <div class="top"><div class="th">Classifica live</div><ol id="top5"><li class="dim">Nessun tempo ancora</li></ol></div>
  </div>`)}function Sf(s){let[t,e]=s.finale.righe;return rn(`<div class="ov-title ov-finale">
    <img class="logo" src="media/logo-white.png" alt="">
    <div class="thanks">${$t(t||"")}</div>
    <div class="welcome">${$t(e||"")}</div>
    <div class="credit">Modello 3D "Aprilia RS660" di ejsnowy (Sketchfab), licenza CC BY 4.0, modificato</div>
  </div>`)}var Nf=$f(Tf());function Af(s,t){let e=atob(s),n=e.length,i=new Uint8Array(n),r=t>>>0||2463534242;for(let o=0;o<n;o++)r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,i[o]=e.charCodeAt(o)^r&255;return i}var Rf=[19,27,34,41,48,55],lr=11300,Cf=6800,qc=1500,P_=8e3;function L_(s){let t=atob(s),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer}var cr=class{constructor(t,e,n,i){this.ctx=t;let r=e.sampleRate,o=e.getChannelData(0),a=Math.floor(n[0]*r),l=Math.min(o.length,Math.floor(n[1]*r)),c=Math.floor(Math.min(.3,(n[1]-n[0])/4)*r),h=l-a-c,u=t.createBuffer(1,h,r),f=u.getChannelData(0);for(let d=0;d<h;d++){let x=o[a+d];if(d<c){let v=d/c;x=x*v+o[a+h+d]*(1-v)}f[d]=x}this.src=t.createBufferSource(),this.src.buffer=u,this.src.loop=!0,this.gain=t.createGain(),this.gain.gain.value=0,this.src.connect(this.gain),this.gain.connect(i),this.src.start(0,Math.random()*h/r)}set(t,e,n=.05){let i=this.ctx.currentTime;this.src.playbackRate.setTargetAtTime(t,i,.04),this.gain.gain.setTargetAtTime(e,i,n)}},$o=class{constructor(t){this.sample=t,this.ctx=null,this.enabled=!0,this.gear=0,this.rpm=qc,this.thr=0,this.rest=0,this.cutUntil=0,this.blipUntil=0}async start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=5e3,this.lp.Q.value=.5,this.hp=e.createBiquadFilter(),this.hp.type="highpass",this.hp.frequency.value=70,this.hp.Q.value=.7,this.hp.connect(this.lp),this.lp.connect(this.master);let n=e.createBuffer(1,e.sampleRate*2,e.sampleRate),i=n.getChannelData(0),r=0;for(let a=0;a<i.length;a++){let l=Math.random()*2-1;r=r*.97+l*.03,i[a]=r*6}let o=e.createBufferSource();if(o.buffer=n,o.loop=!0,this.wlp=e.createBiquadFilter(),this.wlp.type="lowpass",this.wlp.frequency.value=400,this.windGain=e.createGain(),this.windGain.gain.value=0,o.connect(this.wlp),this.wlp.connect(this.windGain),this.windGain.connect(this.master),o.start(),this.sample)try{let a=this.sample.d?Af(this.sample.d,this.sample.s).buffer:L_(this.sample.data),l=await e.decodeAudioData(a),c=this.sample.sections;this.idle=new cr(e,l,c.idle,this.hp),this.high=new cr(e,l,c.high,this.hp),this.decel=new cr(e,l,c.decel,this.hp)}catch(a){console.warn("audio",a)}this.master.gain.setTargetAtTime(this.enabled?1:0,e.currentTime,.3)}toggle(){return this.enabled=!this.enabled,this.master&&this.master.gain.setTargetAtTime(this.enabled?1:0,this.ctx.currentTime,.2),this.enabled}duck(t){this.master&&this.master.gain.setTargetAtTime(t||!this.enabled?0:1,this.ctx.currentTime,.4)}updateRpm(t,e,n){let i=this.ctx.currentTime;if(t<.6){this.gear=0,this.rpm+=(qc-this.rpm)*Math.min(1,n*3);return}let r=this.gear,o=h=>lr*t/Rf[h]+700,a=t<8&&!e?5200+t*500:0;for(o(r)>lr&&r<Rf.length-1&&(r++,this.cutUntil=i+.075);r>0&&o(r)<(e?Cf+1500:Cf-1500);)r--,this.blipUntil=i+.12;let l=r!==this.gear;this.gear=r;let c=Math.max(2600,a,Math.min(lr+200,o(r)));i<this.blipUntil&&(c=Math.min(lr,c+1800)),l?this.rpm=this.rpm*.35+c*.65:this.rpm+=(c-this.rpm)*Math.min(1,n*(c<this.rpm?10:7))}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime;this.updateRpm(t,n,e);let r=t>.6;if(this.rest=r?0:this.rest+e,this.thr+=((r&&!n?1:0)-this.thr)*Math.min(1,e*7),this.windGain.gain.setTargetAtTime(Math.min(.3,(t/70)**2*.3),i,.25),this.wlp.frequency.setTargetAtTime(300+t*14,i,.25),!this.high)return;let o=this.rpm,a=Math.max(0,Math.min(1,(o-3e3)/(lr-3e3)));this.lp.frequency.setTargetAtTime(2500+6e3*a,i,.05);let l=i<this.cutUntil?.15:1,c=Math.max(0,Math.min(1,(o-3600)/2400)),h=Math.max(.95,Math.min(2.6,o/qc*.62)),u=Math.max(.7,Math.min(1.45,o/P_)),f=r?1:Math.max(0,1-Math.max(0,this.rest-2.5)/2),d=.35+.65*this.thr;this.idle.set(r?h:1,(1-c)*(r?.8:.4)*f*l,.06),this.high.set(u,c*d*l,l<1?.012:.05),this.decel.set(u*1.02,c*(1-this.thr)*.8,.05)}};var Cn=40,D_=16/9,N_=9.81,If=Math.tan(di.degToRad(Cn/2))*D_,U_=1920,Pf={y:1.52,z:-.36},Lf={y:1.08,z:.12},yi=di.clamp,Yc=di.lerp,hr=(s,t,e)=>{let n=yi((e-s)/(t-s),0,1);return n*n*(3-2*n)},Df=s=>.5-.5*Math.cos(Math.PI*yi(s,0,1)),O_=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Uf={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{localStorage.setItem(s,t)}catch{}}},ge=s=>document.querySelector(s),de=window.SRT_CONFIG,vi=window.SRT_ASSETS,pe=()=>new D,ur=new D,fr=new D;function qo(s,t,e,n=pe()){ur.copy(s),fr.copy(t);let i=yi(ur.dot(fr),-1,1),r=Math.acos(i);if(r<1e-4)return n.copy(ur);Math.PI-r<.001&&fr.add(new D(0,.01,0)).normalize();let o=Math.acos(yi(ur.dot(fr),-1,1)),a=Math.sin(o),l=Math.sin((1-e)*o)/a,c=Math.sin(e*o)/a;return n.copy(ur).multiplyScalar(l).addScaledVector(fr,c).normalize()}async function F_(){let s=document.createElement("style");s.textContent=vi.fontCss,document.head.appendChild(s);let t=ge("#loading .bar i"),e=x=>{t&&(t.style.width=Math.round(x*100)+"%")};await Promise.all([document.fonts.load("40px Anton"),document.fonts.load("700 20px Orbitron"),document.fonts.load("600 20px Inter"),document.fonts.load("400 20px Inter")]),e(.1);let i=new URLSearchParams(location.search).get("leggera")==="1"||Uf.get("srt-q")==="light"?"light":"full",r=new Vo(ge("#stage"),{quality:i});await r.setupSky(vi),e(.3);let o={},a=Object.keys(vi.tex),l=0;for(let x of a){o[x]={};for(let v in vi.tex[x]){let m=new ye(await or(vi.tex[x][v]));m.needsUpdate=!0,o[x][v]=m}e(.3+.4*(++l/a.length))}let c={solo:await or(vi.logos.solo),sponsors:await Promise.all(vi.logos.sponsors.map(or))},h=new Go,u=df({scene:r.scene,renderer:r.renderer,track:h,tex:o,logos:c,quality:i});e(.8);let f=await B_(r),d=new Zc({eng:r,track:h,W:u,bike:f});r.renderer.compile(r.scene,r.camera),e(1),d.start(),setTimeout(()=>ge("#loading").classList.add("gone"),300),window.__srt=d}async function B_(s){let t=new Le;s.scene.add(t);let e=window.SRT_BIKE;if(!e||!e.data)return t;let n=atob(e.data),i=new Uint8Array(n.length);for(let d=0;d<n.length;d++)i[d]=n.charCodeAt(d);let o=(await new Promise((d,x)=>new No().parse(i.buffer,"",d,x))).scene;o.traverse(d=>{if(!d.isMesh)return;d.castShadow=!0,d.receiveShadow=!0;let x=Array.isArray(d.material)?d.material:[d.material];for(let v of x){let m=(v.name||"").toLowerCase();m.includes("glass")&&!m.includes("edge")&&(v.transparent=!0,v.opacity=.24,v.depthWrite=!1,v.roughness=.06,v.metalness=0,v.color?.set(3817288)),v.envMapIntensity=.9}}),e.rotY&&(o.rotation.y=e.rotY),o.updateMatrixWorld(!0);let a=new We().setFromObject(o),l=a.getSize(pe()),c=Math.max(l.x,l.z),h=(e.length||1.995)/c;o.scale.multiplyScalar(h),o.updateMatrixWorld(!0);let u=new We().setFromObject(o),f=u.getCenter(pe());return o.position.x-=f.x,o.position.z-=f.z,o.position.y-=u.min.y,e.offsetZ&&(o.position.z+=e.offsetZ),t.add(o),t}var Zc=class{constructor({eng:t,track:e,W:n,bike:i}){this.eng=t,this.track=e,this.W=n,this.bikeObj=i,this.cam=t.camera,this.cam.fov=Cn,this.audio=new $o(vi.engine),this.audio.enabled=de.audio?.motore!==!1,this.center=new D(20,0,160),this.heli={R:690,H:345,theta:-2.2,w:.04},this.motion=null,this.queue=null,this.cur=0,this.spec={mode:"free",pos:pe(),look:pe(),fov:Cn,roll:0,s:0,lat:0,v:0,brake:1,k:0},this.rider={lean:0,tuck:0,brake:1,v:0},this.overlay=ge("#overlay"),this.buildStations(),this.buildSteps(),this.bindInput(),this.setupMusic()}buildStations(){let t=this.track,e=t.startS,n=l=>t.wrap(e+l),i=this.stations=[],r=l=>(l.index=i.length,i.push(l),l);r({id:"apertura",kind:"heli"}),r({id:"programma",kind:"track",s:n(-46),side:1,ahead:50,wallLat:36,bottom:15,fill:.68,lat:-2,frameDown:.12,make:()=>Rn.programma(de)}),r({id:"beta",kind:"track",s:n(170),side:1,ahead:24,dist:6,reveals:3,make:()=>Rn.partner(de)}),r({id:"ci26",kind:"track",s:n(340),side:-1,ahead:24,dist:6,video:de.coppaItalia2026.video,make:()=>Rn.recap(de.coppaItalia2026)});let o=de.coppaItalia2027.gruppi.reduce((l,c)=>l+c.piloti.length,0);r({id:"ci27",kind:"track",s:n(500),side:1,ahead:24,dist:6,reveals:o,make:()=>Rn.piloti(de.coppaItalia2027)}),r({id:"civ26",kind:"track",s:n(650),side:-1,ahead:24,dist:6,video:de.civ2026.video,make:()=>Rn.recap(de.civ2026,{rider:!0})}),r({id:"civ27",kind:"track",s:n(800),side:1,ahead:24,dist:6,video:de.civ2027.video,make:()=>Rn.hype(de.civ2027)}),r({id:"coppola",kind:"track",s:n(905),side:-1,ahead:24,dist:6,reveals:de.coppola.righe.length+1,make:()=>Rn.reveal(de.coppola)}),de.sponsor.forEach((l,c)=>r({id:"sponsor"+c,kind:"track",s:n(1040+c*105),side:c%2?-1:1,ahead:24,dist:6,make:()=>Rn.sponsor(l,c,de.sponsor.length)})),r({id:"quiz",kind:"track",s:n(1720),side:1,ahead:24,dist:6,kahoot:!0,make:()=>Rn.quiz()}),r({id:"finale",kind:"finale",s:n(2225)});for(let l of i){if(l.kind!=="track")continue;let c=l.side;l.lat=l.lat??c*3.5;let h=this.povEye(l.s,l.lat,0,0,pe()),u=l.s+l.ahead,f=t.idx(u),d=c*(l.wallLat??this.W.barrierOffset(f,c)+l.dist),x=t.point(u,d,0),v=Math.hypot(x.x-h.x,x.z-h.z),m=(l.fill||.7)*2*v*If,p=m*9/16,M=x.clone().setY((l.bottom??3.2)+p/2),w=new D(h.x-M.x,0,h.z-M.z).normalize(),_=this.W.makeScreen(M,w,{width:m,title:"Stagione 2027",sub:""}),C=document.createElement("div");C.className="p3d";let b=l.make();if(C.appendChild(b),l.video){let y=rn(`<div class="vid"><video preload="auto" playsinline></video><div class="vmsg"><b>Video</b><span>${l.video}</span><small>File non trovato: mettilo nella cartella "video" con questo nome</small></div></div>`),E=y.querySelector("video");E.src=l.video,E.addEventListener("error",()=>y.classList.add("missing")),E.addEventListener("loadeddata",()=>y.classList.remove("missing")),C.appendChild(y),l.videoEl=E,l.vidLayer=y}let A=new Lo(C);A.position.copy(M).addScaledVector(w,.42),A.lookAt(M.clone().addScaledVector(w,10)),A.scale.setScalar(m/U_),A.visible=!1,this.eng.cssScene.add(A);let S=m/(2*If)*.985,g=M.clone();g.y-=p*(l.frameDown??.15),Object.assign(l,{obj:A,panel:b,wrap:C,eye:h,look:g,center:M.clone(),screen:_,zoomPose:{pos:M.clone().addScaledVector(w,S),look:M.clone()}})}this.bike={s:i[1].s,lat:i[1].lat},this.titleEl=yf(de),this.finaleEl=Sf(de),this.overlay.appendChild(this.titleEl),this.overlay.appendChild(this.finaleEl);let a=de.gioco||{};if(a.url){let l=(0,Nf.default)(0,"M");l.addData(a.url),l.make(),this.qrEl=Mf(l.createSvgTag({cellSize:8,margin:2,scalable:!0})),this.titleEl.appendChild(this.qrEl),a.classifica&&a.mostraClassifica!==!1?(this.pollTop(),setInterval(()=>this.pollTop(),6e4)):this.qrEl.querySelector(".top").remove()}}async pollTop(){if(this.cur!==0&&this.steps)return;let t=this.qrEl?.querySelector("#top5");if(t)try{let n=await(await fetch(de.gioco.classifica+"?azione=top",{cache:"no-store"})).json(),i=new Map;for(let a of Array.isArray(n)?n:[]){if(!a||!a.n||!(a.t>0))continue;let l=String(a.n).toLowerCase();(!i.has(l)||i.get(l).t>a.t)&&i.set(l,a)}let r=[...i.values()].sort((a,l)=>a.t-l.t).slice(0,5),o=a=>{let l=Math.floor(a/6e4),c=Math.floor(a/1e3)%60,h=Math.floor(a%1e3);return`${l}:${String(c).padStart(2,"0")}.${String(h).padStart(3,"0")}`};if(t.innerHTML="",!r.length){let a=document.createElement("li");a.className="dim",a.textContent="Nessun tempo ancora",t.appendChild(a);return}for(let a of r){let l=document.createElement("li"),c=document.createElement("span");c.className="n",c.textContent=a.n;let h=document.createElement("span");h.className="t",h.textContent=o(a.t),l.append(c,h),t.appendChild(l)}}catch{}}buildSteps(){let t=this.steps=[],e={programma:"Programma",beta:"Beta Formazione",ci26:"Coppa Italia 2026",ci27:"Coppa Italia 2027 piloti",civ26:"CIV Sportbike 2026",civ27:"CIV Sportbike 2027",coppola:"Svelamento nuovo pilota",quiz:"Quiz"};this.stations.forEach((n,i)=>{let r=n.id.startsWith("sponsor")?"Grazie "+de.sponsor[+n.id.slice(7)].nome:e[n.id]||n.id;if(n.kind==="heli")t.push({st:i,label:"Apertura (elicottero)",view:"heli"});else if(n.kind==="finale")t.push({st:i,label:"Traguardo, grazie a tutti",view:"heli"});else{t.push({st:i,label:r,view:"track",r:0});for(let o=1;o<=(n.reveals||0);o++)t.push({st:i,label:r+" "+o,view:"track",r:o});n.video&&(t.push({st:i,label:r+", video a schermo intero",view:"wall",play:!1}),t.push({st:i,label:r+", play video",view:"wall",play:!0})),n.kahoot&&(t.push({st:i,label:"Quiz, schermo intero",view:"wall"}),t.push({st:i,label:"Quiz, Gran Premio SOLO",view:"kahoot"}))}})}povEye(t,e,n,i,r=pe()){let o=this.track.frame(t),a=Yc(Pf.y,Lf.y,i),l=Yc(Pf.z,Lf.z,i),c=.3*Math.sign(n)*Math.min(1,Math.abs(n)/.8),h=c*Math.cos(n)+a*Math.sin(n),u=-c*Math.sin(n)+a*Math.cos(n);return r.copy(o.p).addScaledVector(o.n,e+h).addScaledVector(o.t,l).setY(u)}heliPose(t,e){let n=this.heli;return e.mode="free",e.pos.set(this.center.x+Math.cos(t)*n.R,n.H,this.center.z+Math.sin(t)*n.R*.85),e.look.copy(this.center).setY(-30),e.fov=Cn,e.roll=0,e}chasePose(t,e){return{pos:this.track.point(t-6.5,e,2.3),look:this.track.point(t+18,e,.8)}}mFree(t,e,n,i=0,r="slerp"){let o=t.pos.clone().lerp(e.pos,.5);o.y=Math.max(t.pos.y,e.pos.y)+i;let a=pe(),l=pe(),c=pe(),h=pe();return{dur:n,f:(u,f)=>{let d=O_(u),x=(1-d)*(1-d),v=2*(1-d)*d,m=d*d;f.mode="free",f.pos.set(0,0,0).addScaledVector(t.pos,x).addScaledVector(o,v).addScaledVector(e.pos,m);let p=hr(0,1,u);if(r==="lerp")f.look.copy(t.look).lerp(e.look,p);else{a.copy(t.look).sub(f.pos).normalize(),l.copy(e.look).sub(f.pos).normalize(),qo(a,l,p,c);let M=Yc(t.look.distanceTo(f.pos),e.look.distanceTo(f.pos),p);f.look.copy(f.pos).addScaledVector(c,Math.max(5,M))}f.fov=Cn,f.roll=0}}}mDolly(t,e,n,i,r=n){return{dur:i,f:(o,a)=>{let l=Df(o);a.mode="free",a.pos.copy(t).lerp(e,l),a.look.copy(n).lerp(r,l),a.fov=Cn,a.roll=0}}}mHead(t,e,n,i,r){let o=this.povEye(t,e,0,0),a=n.clone().sub(o).normalize(),l=i.clone().sub(o).normalize(),c=pe();return{dur:r,f:(h,u)=>{u.mode="pov",u.s=t,u.lat=e,u.v=0,u.brake=1,u.k=0,qo(a,l,Df(h),c),u.look.copy(o).addScaledVector(c,30)}}}mRide(t,e,n,i,r,o){let a=this.track,l=a.forwardDist(t,i),c=a.profile(t,l),h=c.T,u=pe(),f=pe(),d=pe(),x=pe(),v=pe(),m=pe();return{dur:h,ride:!0,f:(p,M)=>{let w=p*h,_=a.sampleProfile(c,w),C=_.s,b=Math.abs(c.step*_.j),A=Math.abs(l)-b,S=1-hr(0,45,b),g=1-hr(0,50,A),y=Math.max(0,1-S-g),E=(a.lineAt(C)*y+e*S+r*g)/Math.max(1,S+g+y);M.mode="pov",M.s=C,M.lat=E,M.v=_.v,M.brake=_.brake,M.k=a.frame(C).k,u.copy(a.point(C,E,1.2));let L=12+_.v*.85;m.copy(a.point(C+L,a.lineAt(C+L)*.8,1.2-L*.085)),f.copy(m).sub(u).normalize(),n&&d.copy(n).sub(u).normalize(),o&&x.copy(o).sub(u).normalize(),v.copy(f),n&&qo(d,v,hr(0,1.7,w),v),o&&qo(v,x,hr(h-2.6,h-.2,w),v),M.look.copy(u).addScaledVector(v,30)}}}chain(...t){t=t.filter(Boolean);let e=t.reduce((n,i)=>n+i.dur,0);return{dur:e,parts:t,ride:t.some(n=>n.ride),f:(n,i)=>{let r=n*e;for(let o of t){if(r<=o.dur||o===t[t.length-1]){o.f(yi(r/o.dur,0,1),i);return}r-=o.dur}}}}run(t,e,n=[]){this.motion={...t,t:0,speedMul:1,onDone:e,cues:n.map(i=>({...i,done:!1}))}}restAt(t,e){return e==="heli"?()=>this.heliPose(this.heli.theta,this.spec):e==="wall"||e==="kahoot"?()=>{let n=this.spec;n.mode="free",n.pos.copy(t.zoomPose.pos),n.look.copy(t.zoomPose.look),n.fov=Cn,n.roll=0}:()=>{let n=this.spec;n.mode="pov",n.s=t.s,n.lat=t.lat,n.v=0,n.brake=1,n.k=0,n.look.copy(t.look)}}currentPose(){return{pos:this.cam.position.clone(),look:this.lookNow.clone()}}go(t,e=!1){if(t=yi(t,0,this.steps.length-1),t===this.cur)return;let n=this.steps[this.cur],i=this.steps[t],r=this.stations[n.st],o=this.stations[i.st],a=t>this.cur;this.cur=t,this.updateCounter(),this.closeKahoot(i.view==="kahoot");let l=d=>d==="wall"||d==="kahoot";if(n.st===i.st&&o.kind==="track"){if(n.view==="track"&&i.view==="track"){this.setReveal(o,i.r);return}if(n.view==="track"&&l(i.view)){this.audio.duck(!0),this.showVideo(o,!0),this.run(this.mDolly(o.eye,o.zoomPose.pos,o.look,2.8,o.center),()=>{this.rest=this.restAt(o,"wall"),this.applyZoomStep(o,i)}),this.rest=null;return}if(l(n.view)&&l(i.view)){this.applyZoomStep(o,i);return}if(l(n.view)&&i.view==="track"){this.audio.duck(!1),this.stopVideo(o),this.run(this.mDolly(o.zoomPose.pos,o.eye,o.center,e?1.2:2.4,o.look),()=>{this.rest=this.restAt(o,"track")},[{t:e?.2:.6,fn:()=>this.showVideo(o,!1)}]),this.rest=null;return}}this.audio.duck(!1),this.stopVideo(r),this.titleEl.classList.remove("on"),this.finaleEl.classList.remove("on");let c=l(n.view)?this.mDolly(r.zoomPose.pos,r.eye,r.center,2.4,r.look):null;r.obj&&(c&&setTimeout(()=>this.showVideo(r,!1),600),setTimeout(()=>this.hidePanel(r),c?2600:900));let h=r.look,u=(d,x=[])=>{let v=null;l(i.view)&&(v=this.mDolly(o.eye,o.zoomPose.pos,o.look,2.8,o.center));let m=this.chain(d,v),p=[{t:Math.max(0,d.dur-2.6),fn:()=>{this.showPanel(o,i.r),v&&this.showVideo(o,!0)}},...x];this.run(m,()=>{this.bike={s:o.s,lat:o.lat},v?(this.rest=this.restAt(o,"wall"),this.applyZoomStep(o,i)):(this.rest=this.restAt(o,"track"),o.wrap.classList.contains("show")||this.showPanel(o,i.r))},p)};if(o.kind==="heli"){let d=this.heliPose(this.heli.theta,{pos:pe(),look:pe()});this.run(this.mFree(this.currentPose(),d,5,120,"lerp"),()=>{this.rest=this.restAt(o,"heli"),this.titleEl.classList.add("on")}),this.rest=null;return}if(o.kind==="finale"){let d=this.mRide(r.s,r.lat,h,o.s,0,null),x=this.chasePose(o.s,0),v=this.povEye(o.s,0,0,0),m=this.mFree({pos:v,look:this.track.point(o.s+30,0,1)},x,1.8,.5,"lerp"),p=x.pos.clone().sub(this.center);this.heli.theta=Math.atan2(p.z/.85,p.x);let M=this.heliPose(this.heli.theta,{pos:pe(),look:pe()}),w=this.mFree(x,M,7,60,"lerp"),_=this.chain(c,d,m,w);this.run(_,()=>{this.bike={s:o.s,lat:0},this.rest=this.restAt(o,"heli"),this.finaleEl.classList.add("on")},[{t:_.dur-4.5,fn:()=>this.finaleEl.classList.add("on")}]),this.rest=null;return}if(n.view==="heli"){let d=this.chasePose(o.s,o.lat),x=this.mFree(this.currentPose(),d,6.5,60,"lerp"),v=this.track.point(o.s+40,o.lat,1),m=this.mFree(d,{pos:o.eye,look:v},1.8,.3,"lerp"),p=this.mHead(o.s,o.lat,v,o.look,1.6);this.rest=null,u(this.chain(x,m,p));return}if(a){this.rest=null,u(this.chain(c,this.mRide(r.s,r.lat,h,o.s,o.lat,o.look)));return}let f=this.currentPose();this.rest=null,u(this.mFree(f,{pos:o.eye,look:o.look},3.2,25,"lerp"))}next(){this.go(this.cur+1)}prev(){if(this.cur===0)return;let t=this.steps[this.cur],e=this.steps[this.cur-1];if(t.st===e.st&&this.stations[t.st].kind==="track"){this.go(this.cur-1,!0);return}this.snapTo(this.cur-1)}snapTo(t){t=yi(t,0,this.steps.length-1),this.motion=null,this.queue=null,this.snapping=!0;let e=ge("#veil");e.classList.add("on"),clearTimeout(this.snapT),this.snapT=setTimeout(()=>{this.motion=null;let n=this.steps[t],i=this.stations[n.st];for(let r of this.stations)r.obj&&(clearTimeout(r.hideT),r.wrap.classList.remove("show","vid-on"),r.obj.visible=!1,r.screen.setLive(!1),r.videoEl&&r.videoEl.pause());if(this.closeKahoot(!1),this.duckMusic(!1),this.audio.duck(!1),this.titleEl.classList.remove("on"),this.finaleEl.classList.remove("on"),this.cur=t,this.updateCounter(),Object.assign(this.rider,{lean:0,tuck:0,brake:0,v:0}),i.kind==="heli"||i.kind==="finale"?(this.rest=this.restAt(i,"heli"),i.kind==="heli"?(this.titleEl.classList.add("on"),this.bike={s:this.stations[1].s,lat:this.stations[1].lat}):(this.finaleEl.classList.add("on"),this.bike={s:i.s,lat:0})):(this.bike={s:i.s,lat:i.lat},this.showPanel(i,n.r),n.view==="wall"||n.view==="kahoot"?(this.showVideo(i,!0),this.rest=this.restAt(i,"wall"),n.view==="kahoot"&&this.openKahoot()):this.rest=this.restAt(i,"track")),this.rest(),this.snapping=!1,setTimeout(()=>e.classList.remove("on"),80),this.queue){let r=this.queue;this.queue=null,r()}},220)}showPanel(t,e=0){t.obj&&(clearTimeout(t.hideT),t.screen.setLive(!0),t.obj.visible=!0,this.setReveal(t,e),requestAnimationFrame(()=>t.wrap.classList.add("show")))}hidePanel(t){t?.obj&&(t.wrap.classList.remove("show"),clearTimeout(t.hideT),t.hideT=setTimeout(()=>{t.obj.visible=!1,t.screen.setLive(!1)},700))}setReveal(t,e){t.panel&&(t.panel.querySelectorAll(".r").forEach(n=>n.classList.toggle("on",+n.dataset.r<=e)),t.panel.dataset.r=e)}showVideo(t,e){t?.vidLayer&&t.wrap.classList.toggle("vid-on",e)}stopVideo(t){t?.videoEl&&t.videoEl.pause(),this.duckMusic(!1)}applyZoomStep(t,e){if(e.view==="kahoot"){this.openKahoot();return}t.videoEl&&(e.play?(t.videoEl.play().catch(()=>{}),this.duckMusic(!0)):(t.videoEl.pause(),this.duckMusic(!1)))}openKahoot(){let t=(de.quiz?.url||"").trim(),e=ge("#kahoot");if(this.quizDone=!1,!t){e.classList.add("on","nourl");return}if(de.quiz.modalita==="finestra"){window.open(t,"kahoot");return}if(!e.querySelector("iframe")){let n=document.createElement("iframe");n.src=t,n.allow="fullscreen; autoplay; clipboard-write",e.querySelector(".kf").appendChild(n)}e.classList.remove("nourl"),e.classList.add("on"),this.duckMusic(!0)}quizActive(){return ge("#kahoot").classList.contains("on")&&!!ge("#kahoot iframe")&&!this.quizDone&&de.quiz?.tipo!=="kahoot"}quizNext(){let t="p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),e=0,n=()=>{try{ge("#kahoot iframe").contentWindow.postMessage({srtQuiz:"next",id:t},"*")}catch{}};clearInterval(this.quizRetry),this.quizAckId=t,n(),this.quizRetry=setInterval(()=>{if(this.quizAckId!==t||++e>4){clearInterval(this.quizRetry);return}n()},900)}closeKahoot(t){if(t)return;let e=ge("#kahoot");e.classList.contains("on")&&(e.classList.remove("on"),this.duckMusic(!1))}bindInput(){let t=["ArrowRight","ArrowDown","PageDown"," ","Enter","n","N"],e=["ArrowLeft","ArrowUp","PageUp","Backspace","p","P"],n=0,i=()=>{this.audio.start(),this.startMusic(),ge("#hint").classList.add("gone")},r=a=>{i();let l=performance.now();if(!(l-n<280)){if(n=l,this.snapping){this.queue=a;return}if(this.motion){this.motion.speedMul=Math.min(4,(this.motion.speedMul||1)*2.5);return}a()}},o=()=>{i();let a=performance.now();if(!(a-n<200)){if(n=a,this.queue){this.queue=null;return}if(!this.snapping){if(this.motion){this.snapTo(this.cur-1);return}this.prev()}}};addEventListener("keydown",a=>{if(a.target&&(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA"))return;let l=a.key;if(t.includes(l)&&this.quizActive()){a.preventDefault(),this.quizNext();return}if(t.includes(l)){a.preventDefault(),r(()=>this.next());return}if(e.includes(l)){a.preventDefault(),o();return}if(l==="b"||l==="B"||l==="."){a.preventDefault(),ge("#black").classList.toggle("on");return}if(l==="f"||l==="F"||l==="F5"){a.preventDefault(),this.fullscreen();return}if(l==="h"||l==="H"||l==="?"){ge("#help").classList.toggle("on");return}if(l==="m"||l==="M"){this.toggleMenu();return}if(l==="s"||l==="S"){let c=this.audio.toggle();this.toast(c?"Suono motore acceso":"Suono motore spento");return}if(l==="a"||l==="A"){let c=this.toggleMusic();this.toast(c?"Musica accesa":"Musica spenta");return}if(l==="l"||l==="L"){let c=this.eng.quality==="light"?"full":"light";this.eng.setQuality(c),Uf.set("srt-q",c),this.toast(c==="light"?"Modalit\xE0 leggera":"Qualit\xE0 piena");return}if(l==="Home"){i(),this.snapTo(0);return}l==="Escape"&&(this.closeKahoot(!1),ge("#help").classList.remove("on"),ge("#menu").classList.remove("on"))}),ge("#stage").addEventListener("mousedown",a=>{a.button===0&&r(()=>this.next()),a.button===2&&o()}),ge("#stage").addEventListener("contextmenu",a=>a.preventDefault()),ge("#kahoot .kx").addEventListener("click",()=>this.closeKahoot(!1)),addEventListener("message",a=>{a.data&&(a.data.srtQuiz==="ack"&&a.data.id===this.quizAckId&&(this.quizAckId=null,clearInterval(this.quizRetry)),a.data.srtQuiz==="done"&&this.quizActive()&&(this.quizDone=!0,this.quizAckId=null,clearInterval(this.quizRetry),r(()=>this.next())))}),ge("#help").addEventListener("click",()=>ge("#help").classList.remove("on"))}fullscreen(){let t=document.documentElement;document.fullscreenElement?document.exitFullscreen?.():(t.requestFullscreen||t.webkitRequestFullscreen)?.call(t)}toast(t){let e=ge("#toast");e.textContent=t,e.classList.add("on"),clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.classList.remove("on"),1400)}toggleMenu(){let t=ge("#menu");if(t.classList.contains("on")){t.classList.remove("on");return}t.innerHTML='<div class="mt">Vai a una tappa <small>(solo per le prove)</small></div>'+this.steps.map((e,n)=>`<button data-i="${n}" class="${n===this.cur?"cur":""}">${String(n+1).padStart(2,"0")}  ${e.label}</button>`).join(""),t.querySelectorAll("button").forEach(e=>e.onclick=()=>{t.classList.remove("on"),this.jump(+e.dataset.i)}),t.classList.add("on")}jump(t){this.snapTo(t)}updateCounter(){ge("#counter").textContent=`${this.cur+1}/${this.steps.length}`}setupMusic(){let t=de.audio?.musica;if(this.musicVol=Math.max(0,Math.min(1,de.audio?.volumeMusica??.12)),this.musicOn=!0,this.musicDuck=!1,!t)return;if(t==="integrata"){this.musicData=window.SRT_MUSIC||null;return}let e=this.music=new Audio(t);e.loop=!0,e.volume=0}musicTarget(){return this.musicOn&&!this.musicDuck?this.musicVol:0}async startMusic(){if(this.musicStarted)return;if(this.musicStarted=!0,this.music){this.music.play().catch(()=>{}),this.applyMusic();return}let t=this.musicData;if(t)try{let e=window.AudioContext||window.webkitAudioContext,n=this.mctx=new e,i=atob(t.d),r=new Uint8Array(i.length);for(let c=0;c<i.length;c++)r[c]=i.charCodeAt(c);let o=await n.decodeAudioData(r.buffer),a=this.mgain=n.createGain();a.gain.value=0,a.connect(n.destination);let l=n.createBufferSource();l.buffer=o,l.loop=!0,l.loopStart=t.start,l.loopEnd=t.start+t.len,l.connect(a),l.start(0,t.start),this.applyMusic(2.5)}catch(e){console.warn("musica",e)}}applyMusic(t=.8){let e=this.musicTarget();if(this.mgain){let i=this.mctx;this.mgain.gain.cancelScheduledValues(i.currentTime),this.mgain.gain.setTargetAtTime(e,i.currentTime,t/3);return}if(!this.music)return;let n=this.music;clearInterval(this.duckI),this.duckI=setInterval(()=>{n.volume+=(e-n.volume)*.15,Math.abs(n.volume-e)<.004&&(n.volume=e,clearInterval(this.duckI))},50)}duckMusic(t){this.musicDuck=!!t,this.applyMusic(t?.6:1.5)}toggleMusic(){return this.musicOn=!this.musicOn,this.applyMusic(),this.musicOn}finishMotion(){let t=this.motion;if(t){t.f(1,this.spec),this.motion=null;for(let e of t.cues||[])e.done||(e.done=!0,e.fn());t.onDone&&t.onDone()}}start(){this.rest=this.restAt(this.stations[0],"heli"),this.titleEl.classList.add("on"),this.updateCounter(),this.lookNow=pe();let t=performance.now(),e=this.rider,n=this.spec,i=this.cam,r=pe(),o=pe(),a=new Oe,l=new cn,c=h=>{let u=Math.min(.05,(h-t)/1e3);t=h;let f=h/1e3;if(this.heli.theta+=this.heli.w*u,this.motion){let v=this.motion;window.__freeze||(v.t+=u*(v.speedMul||1));let m=Math.min(1,v.t/v.dur);v.f(m,n);for(let p of v.cues||[])!p.done&&v.t>=p.t&&(p.done=!0,p.fn());if(m>=1&&(this.motion=null,v.onDone&&v.onDone(),this.queue)){let p=this.queue;this.queue=null,p()}}else this.rest&&this.rest();if(n.mode==="pov"){let v=(n.v||0)*(this.motion?.speedMul||1),m=yi(Math.atan(v*v*(n.k||0)/N_),-.9,.9);e.lean+=(m-e.lean)*Math.min(1,u*5);let p=v>13&&!n.brake?1:0;if(e.tuck+=(p-e.tuck)*Math.min(1,u*(p?1.6:3.2)),e.brake+=((n.brake&&v>3?1:0)-e.brake)*Math.min(1,u*4),e.v=v,this.povEye(n.s,n.lat,e.lean,e.tuck,r),r.y-=e.brake*.035,o.copy(n.look),o.y+=e.tuck*2.2-e.brake*.6,v<.5&&!this.motion&&(r.x+=Math.sin(f*.7)*.012,r.y+=Math.sin(f*.9)*.01,o.x+=Math.sin(f*.33)*.25,o.y+=Math.sin(f*.41)*.12),v>1){let w=Math.min(1,v/60)*.006;r.x+=Math.sin(f*61)*w,r.y+=Math.sin(f*47+1)*w}i.position.copy(r),i.lookAt(o),i.rotateZ(-e.lean*.55);let M=Cn+Math.min(14,v*.32);(Math.abs(i.fov-M)>.01||i.near!==.1)&&(i.fov=M,i.near=.1,i.updateProjectionMatrix()),this.bike={s:n.s,lat:n.lat}}else{e.lean*=.9,e.v=0,i.position.copy(n.pos),o.copy(n.look),!this.motion&&this.steps[this.cur].view!=="heli"&&(o.x+=Math.sin(f*.3)*.03,o.y+=Math.sin(f*.37)*.02),i.lookAt(o),i.rotateZ(n.roll||0);let v=i.position.distanceTo(this.bikeObj?this.bikeObj.position:i.position)<4?.1:.5;(Math.abs(i.fov-(n.fov||Cn))>.01||i.near!==v)&&(i.fov=n.fov||Cn,i.near=v,i.updateProjectionMatrix())}if(this.lookNow.copy(o),this.bikeObj){let v=this.track.frame(this.bike.s);this.bikeObj.position.copy(v.p).addScaledVector(v.n,this.bike.lat).setY(0),l.set(0,Math.atan2(v.t.x,v.t.z),0,"YXZ"),a.setFromEuler(l),this.bikeObj.quaternion.copy(a),this.bikeObj.rotateZ(e.lean),this.bikeObj.rotateX(e.brake*.035*(e.v>3?1:0))}this.audio.update(n.mode==="pov"?e.v:0,u,e.brake>.5,e.tuck);let d=i.position.y>60,x=d?this.center.clone():i.position.clone().lerp(o,.35);this.eng.followShadow(x,d?560:110),this.eng.render(f),requestAnimationFrame(c)};requestAnimationFrame(c)}};F_().catch(s=>{console.error(s);let t=ge("#loading");t&&(t.innerHTML=`<pre class="err">Errore di avvio:
`+(s&&s.stack||s)+"</pre>")});})();
