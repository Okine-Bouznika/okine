var NUM="212696631931"; // remplacez par le numéro WhatsApp du cabinet (indicatif sans +)
var D={
nuque:{t:"Nuque",l:["Inclinez la tête sur le côté, tenez 20 s, 3 fois de chaque côté","Rentrez le menton doucement, 10 répétitions","Placez l’écran à hauteur des yeux","Chaleur douce 10 min sur la zone"],w:"Évitez les mouvements brusques."},
epaule:{t:"Épaule",l:["Bras ballant, faites de petits cercles pendant 1 min","Étirement du bras croisé devant la poitrine, 20 s, 3 fois","Évitez de porter lourd et de dormir sur cette épaule"],w:"Pas de port de charge tant que la douleur persiste."},
dos:{t:"Bas du dos",l:["Allongé, ramenez les genoux vers la poitrine, 20 s, 3 fois","Marchez 10 à 15 min à rythme tranquille","Levez-vous toutes les 30 min si vous restez assis","Évitez le repos total au lit"],w:"Bougez doucement plutôt que de rester immobile."},
genou:{t:"Genou",l:["Repos relatif, évitez escaliers et position accroupie","Glace 15 min si le genou gonfle","Contractez la cuisse genou tendu, 10 s, 10 fois"],w:"Évitez les pivots et les sauts."}
};
var P=[["nuque",200,104,304,109],["epaule",154,128,22,133],["dos",200,210,304,215],["genou",173,290,28,295]];
var svg=document.querySelector(".art svg"),NS="http://www.w3.org/2000/svg";
P.forEach(function(p){
 var c=document.createElementNS(NS,"circle");
 c.setAttribute("cx",p[1]);c.setAttribute("cy",p[2]);c.setAttribute("r",24);c.setAttribute("fill","transparent");c.setAttribute("class","hit");
 c.addEventListener("click",function(){show(p[0])});svg.appendChild(c);
});
svg.querySelectorAll("text").forEach(function(t,i){t.style.cursor="pointer";t.addEventListener("click",function(){show(P[i][0])})});
svg.querySelectorAll("g[opacity]").forEach(function(g){g.style.pointerEvents="none"});
function show(k){
 lastKey=k;var tp=document.getElementById("tip");if(tp)tp.style.display="none";
 var ar=L=="ar",d=(ar?DA:D)[k],el=document.getElementById("panel");
 var h="<h3>"+d.t+(ar?" : ماذا أفعل؟":" : que faire ?")+"</h3><ul>"+d.l.map(function(x){return"<li>"+x+"</li>"}).join("")+"</ul>";
 h+="<p class='warn'>"+d.w+(ar?" في حالة ألم شديد أو تنميل أو حمى أو بعد سقوط، استشر طبيبا بسرعة.":" En cas de douleur intense, d’engourdissement, de fièvre ou après une chute, consultez rapidement.")+"</p>";
 var o=ar?["منذ اليوم","منذ بضعة أيام","منذ أكثر من أسبوع"]:["depuis aujourd’hui","depuis quelques jours","depuis plus d’une semaine"];
 h+="<label for='dur'>"+(ar?"منذ متى تشعر بالألم؟":"Depuis quand avez-vous mal ?")+"</label><select id='dur'>"+o.map(function(x,i){return"<option"+(i==1?" selected":"")+">"+x+"</option>"}).join("")+"</select>";
 h+="<div class='msg' id='msg'></div><a class='wa' id='wa' target='_blank' rel='noopener'><svg class='waic'><use href='#wai'/></svg>"+(ar?"إرسال عبر واتساب":"Envoyer sur WhatsApp")+"</a>";
 el.innerHTML=h;
 var sel=document.getElementById("dur");
 function up(){
  var m=ar?"مرحبا O’Kiné، أشعر بألم في « "+d.t+" » "+sel.value+". هل يمكنكم اقتراح موعد؟ شكرا.":"Bonjour O’Kiné, j’ai une douleur à la zone « "+d.t.toLowerCase()+" » "+sel.value+". Pourriez-vous me proposer un rendez-vous ? Merci.";
  document.getElementById("msg").textContent=m;
  document.getElementById("wa").href="https://wa.me/"+NUM+"?text="+encodeURIComponent(m);
 }
 sel.addEventListener("change",up);up();
}
var L="fr",lastKey=null,AR={"👋 Bienvenue chez O’Kiné, votre santé est notre priorité.": "👋 مرحبا بكم في O’Kiné، صحتكم أولويتنا.", "📞 Appeler": "📞 اتصل", "Prendre rendez-vous": "حجز موعد", "On trouve d’où vient la douleur, et on la soigne.": "نحدد مصدر الألم، ثم نعالجه.", "Un bilan précis, des gestes ciblés et un accompagnement sur mesure pour retrouver votre mobilité, sans douleur.": "تقييم دقيق وحركات موجّهة ومرافقة خاصة بك لتستعيد حركتك بلا ألم.", "Réserver une séance": "احجز حصة", "Kinésithérapie": "الترويض الطبي", "👆 Touchez un point rouge": "👆 المس نقطة حمراء", "Nuque": "الرقبة", "Épaule": "الكتف", "Bas du dos": "أسفل الظهر", "Genou": "الركبة", "👆 Touchez un point rouge sur le corps pour voir quoi faire et recevoir un message WhatsApp prêt à envoyer.": "👆 المس نقطة حمراء على الجسم لمعرفة ما يجب فعله والحصول على رسالة واتساب جاهزة للإرسال.", "Nos soins": "علاجاتنا", "Comment se passe une séance": "كيف تسير الحصة", "Questions fréquentes": "أسئلة شائعة", "Rééducation du dos": "إعادة تأهيل الظهر", "Lombalgies, sciatiques, hernies : un traitement manuel et des exercices adaptés.": "آلام أسفل الظهر، عرق النسا، الانزلاق الغضروفي: علاج يدوي وتمارين مناسبة.", "Articulations & sport": "المفاصل والرياضة", "Entorses, tendinites, reprise d’activité après une blessure ou une opération.": "التواءات والتهاب الأوتار واستئناف النشاط بعد إصابة أو عملية.", "Posture & prévention": "وضعية الجسم والوقاية", "Conseils au quotidien pour éviter que la douleur ne revienne.": "نصائح يومية لتفادي عودة الألم.", "Torticolis & cervicales": "الرقبة وفقرات العنق", "Raideurs de la nuque, maux de tête liés aux tensions, travail sur écran.": "تيبّس الرقبة وصداع التوتر والعمل أمام الشاشة.", "Épaule douloureuse": "ألم الكتف", "Tendinite, capsulite, perte de mobilité : on redonne de l’amplitude au bras.": "التهاب الأوتار وتيبّس الكتف وفقدان الحركة: نعيد للذراع مداها.", "Après une opération": "بعد العملية الجراحية", "Prothèse, ligaments, fracture : une rééducation progressive et suivie.": "مفصل اصطناعي، أربطة، كسور: إعادة تأهيل تدريجية ومتابعة.", "Kiné du sport": "الترويض الطبي الرياضي", "Récupération, prévention des blessures et reprise en confiance.": "استشفاء ووقاية من الإصابات واستئناف بثقة.", "Massage thérapeutique": "التدليك العلاجي", "Détente musculaire profonde pour soulager contractures et fatigue.": "استرخاء عضلي عميق لتخفيف التشنجات والتعب.", "Kiné respiratoire": "الترويض الطبي التنفسي", "Encombrement, toux persistante, récupération après une infection.": "احتقان، سعال مستمر، تعافٍ بعد عدوى.", "Femmes enceintes & post-partum": "الحوامل وما بعد الولادة", "Douleurs de grossesse, rééducation après l’accouchement.": "آلام الحمل وإعادة التأهيل بعد الولادة.", "Enfants & seniors": "الأطفال وكبار السن", "Des soins adaptés à chaque âge : équilibre, prévention des chutes, mobilité.": "عناية تناسب كل عمر: التوازن، الوقاية من السقوط، الحركة.", "Le bilan": "التقييم", "On écoute, on examine et on trouve l’origine exacte de la douleur.": "نستمع ونفحص ونحدد السبب الحقيقي للألم.", "Les soins": "العلاج", "Techniques manuelles et exercices ciblés, adaptés à votre corps.": "تقنيات يدوية وتمارين موجهة تناسب جسمك.", "Le suivi": "المتابعة", "Conseils et exercices à la maison pour éviter les rechutes.": "نصائح وتمارين في المنزل لتفادي الانتكاس.", "Faut-il une ordonnance ?": "هل أحتاج إلى وصفة طبية؟", "Pour un remboursement, une prescription médicale est généralement demandée. Pour un premier avis, écrivez-nous sur WhatsApp.": "للاسترجاع المالي تُطلب عادة وصفة طبية. للحصول على رأي أولي، راسلونا عبر واتساب.", "Combien dure une séance ?": "كم تدوم الحصة؟", "Environ 30 à 45 minutes selon le soin.": "حوالي 30 إلى 45 دقيقة حسب العلاج.", "Combien de séances faut-il ?": "كم حصة أحتاج؟", "Cela dépend du bilan. On vous l’indique dès la première séance.": "يعتمد ذلك على التقييم، وسنخبرك به منذ الحصة الأولى.", "Que dois-je apporter ?": "ماذا يجب أن أحضر؟", "Une tenue souple, vos radios ou analyses si vous en avez, et votre ordonnance.": "لباس مريح، وصور الأشعة أو التحاليل إن وجدت، ووصفتك الطبية.", "Horaires d’ouverture": "ساعات العمل", "Lundi – Vendredi": "من الاثنين إلى الجمعة", "9h – 19h": "9:00 – 19:00", "Samedi": "السبت", "9h – 13h": "9:00 – 13:00", "Dimanche": "الأحد", "Fermé": "مغلق", "Téléphone : 06 96 63 19 31": "الهاتف : 06 96 63 19 31", "Appeler O’Kiné": "اتصل بـ O’Kiné", "O’Kiné · Kinésithérapie": "O’Kiné · الترويض الطبي"},DA={"nuque": {"t": "الرقبة", "l": ["أمِل رأسك إلى الجانب وابق 20 ثانية، 3 مرات لكل جهة", "اسحب الذقن إلى الخلف بلطف، 10 تكرارات", "ضع الشاشة في مستوى العينين", "ضع كمادة دافئة 10 دقائق على المنطقة"], "w": "تجنب الحركات المفاجئة."}, "epaule": {"t": "الكتف", "l": ["والذراع مرتخية، ارسم دوائر صغيرة لمدة دقيقة", "اسحب الذراع أمام الصدر بالذراع الأخرى 20 ثانية، 3 مرات", "تجنب حمل الأشياء الثقيلة والنوم على هذا الكتف"], "w": "لا تحمل أثقالا ما دام الألم مستمرا."}, "dos": {"t": "أسفل الظهر", "l": ["وأنت مستلقٍ، قرّب ركبتيك من صدرك 20 ثانية، 3 مرات", "امش 10 إلى 15 دقيقة بوتيرة هادئة", "انهض كل 30 دقيقة إذا كنت جالسا لفترة طويلة", "تجنب الراحة التامة في السرير"], "w": "تحرك بلطف بدل البقاء ساكنا."}, "genou": {"t": "الركبة", "l": ["راحة نسبية، وتجنب الدرج والجلوس القرفصاء", "ضع الثلج 15 دقيقة إذا تورمت الركبة", "شدّ عضلة الفخذ والركبة مستقيمة 10 ثوانٍ، 10 مرات"], "w": "تجنب الدوران المفاجئ والقفز."}};
function setLang(l){
 L=l;var r=document.documentElement;r.lang=l;r.dir=l=="ar"?"rtl":"ltr";
 var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;
 while(n=w.nextNode()){
  var p=n.parentNode;if(!p||/SCRIPT|STYLE/.test(p.nodeName)||p.id=="open"||(lastKey&&p.closest("#panel")))continue;
  if(n.__o===undefined)n.__o=n.nodeValue;
  var k=n.__o.trim();if(!k)continue;
  n.nodeValue=(l=="ar"&&AR[k])?n.__o.replace(k,AR[k]):n.__o;
 }
 document.title=l=="ar"?AR["O’Kiné · Kinésithérapie"]:"O’Kiné · Kinésithérapie";
 document.getElementById("lang").textContent=l=="ar"?"Français":"العربية";
 openStatus();
 if(lastKey)show(lastKey);
}
document.getElementById("lang").addEventListener("click",function(){setLang(L=="ar"?"fr":"ar")});
function openStatus(){
 var f=new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Casablanca",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date()),o={};
 f.forEach(function(x){o[x.type]=x.value});
 var h=parseInt(o.hour,10)%24+parseInt(o.minute,10)/60,d=o.weekday,
 op=(["Mon","Tue","Wed","Thu","Fri"].indexOf(d)>-1&&h>=9&&h<19)||(d=="Sat"&&h>=9&&h<13);
 document.getElementById("open").textContent=L=="ar"?(op?"🟢 مفتوح الآن":"🔴 مغلق حاليا"):(op?"🟢 Ouvert maintenant":"🔴 Fermé actuellement");
}
setLang("ar");
openStatus();
