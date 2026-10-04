const topics = [
 {id:1,title:"Was ist Trinkwasser?",desc:"Eigenschaften, Qualität und hygienische Anforderungen an Trinkwasser."},
 {id:2,title:"Trinkwassergewinnung",desc:"Grundwasser, Quellwasser und Oberflächenwasser als Rohwasserquellen."},
 {id:3,title:"Wasseraufbereitung im Wasserwerk",desc:"Belüftung, Filtration, Enteisenung/Entmanganung, Desinfektion und optionale Enthärtung."},
 {id:4,title:"Der Weg des Trinkwassers",desc:"Vom Wasserwerk über Speicherung und Rohrnetz bis zur Zapfstelle."},
 {id:5,title:"Anforderungen und Schutz",desc:"Grenzwerte, sichere Versorgung und Schutz vor Rückfließen."},
 {id:6,title:"Praxis und Kompetenzcheck",desc:"Anwendung und Transfer des Wissens auf typische Praxissituationen."}
];

const bank = [
 // 1 — Was ist Trinkwasser?
 {id:"1e1",s:1,d:"easy",t:"multi",q:"Welche Merkmale passen zu einwandfreiem Trinkwasser?",o:["klar","farblos","geruchlos","stark salzig","sichtbar trüb"],a:["klar","farblos","geruchlos"],sol:"Trinkwasser soll unter anderem klar, farblos und geruchlos sein."},
 {id:"1e2",s:1,d:"easy",t:"tf",q:"Trinkwasser ist ein Lebensmittel.",a:true,sol:"Richtig. Trinkwasser gilt als Lebensmittel und unterliegt strengen Anforderungen."},
 {id:"1e3",s:1,d:"easy",t:"mcq",q:"Welche Aussage passt am besten?",o:["Trinkwasser darf gesundheitlich bedenklich sein.","Trinkwasser muss hygienisch einwandfrei sein.","Trinkwasser muss immer mineralreich sein."],a:1,sol:"Trinkwasser muss hygienisch einwandfrei und gesundheitlich unbedenklich sein."},
 {id:"1m1",s:1,d:"medium",t:"mcq",q:"Warum wird Trinkwasser regelmäßig untersucht?",o:["Nur damit es kalt bleibt.","Damit gesundheitliche und hygienische Anforderungen eingehalten werden.","Damit es stärker riecht."],a:1,sol:"Kontrollen prüfen, ob die gesetzlichen und hygienischen Anforderungen eingehalten werden."},
 {id:"1m2",s:1,d:"medium",t:"short",q:"Erkläre in einem Satz, was „hygienisch einwandfrei“ bedeutet.",kw:["keime","krankheit","gesundheit","verunreinigung"],sol:"Beispiel: Das Wasser darf keine gesundheitsschädlichen Keime oder Verunreinigungen enthalten."},
 {id:"1m3",s:1,d:"medium",t:"multi",q:"Welche Faktoren können die Trinkwasserqualität beeinflussen?",o:["Mikroorganismen","chemische Stoffe","Verunreinigungen im Leitungsnetz","Farbe des Wasserhahns"],a:["Mikroorganismen","chemische Stoffe","Verunreinigungen im Leitungsnetz"],sol:"Mikroorganismen, chemische Stoffe und Verunreinigungen im System können die Qualität beeinflussen."},
 {id:"1h1",s:1,d:"hard",t:"short",q:"Begründe, warum Trinkwasser besonders streng kontrolliert werden muss.",kw:["gesundheit","menschen","täglich","lebensmittel","krank"],sol:"Trinkwasser wird täglich von sehr vielen Menschen aufgenommen. Fehler können daher direkt die Gesundheit vieler Menschen gefährden."},
 {id:"1h2",s:1,d:"hard",t:"mcq",q:"Bei einer Probe wird eine gesundheitlich relevante Verunreinigung gefunden. Was ist fachlich am sinnvollsten?",o:["Ignorieren, wenn das Wasser klar aussieht.","Ursache untersuchen und geeignete Schutzmaßnahmen einleiten.","Nur den Geschmack testen."],a:1,sol:"Aussehen allein reicht nicht. Ursache und Risiko müssen untersucht und geeignete Maßnahmen eingeleitet werden."},
 {id:"1h3",s:1,d:"hard",t:"multi",q:"Welche Aussagen begründen die hohe Bedeutung der Trinkwasserhygiene?",o:["Trinkwasser wird direkt konsumiert.","Viele Menschen nutzen dieselbe Versorgung.","Verunreinigungen können sich im Netz auswirken.","Nur die Farbe ist entscheidend."],a:["Trinkwasser wird direkt konsumiert.","Viele Menschen nutzen dieselbe Versorgung.","Verunreinigungen können sich im Netz auswirken."],sol:"Direkter Konsum, große Nutzerzahlen und mögliche Verteilung über das Netz machen Hygiene besonders wichtig."},

 // 2 — Gewinnung
 {id:"2e1",s:2,d:"easy",t:"match",q:"Ordne die Gewinnungsart der passenden Quelle zu.",pairs:[["Grundwasser","Brunnen"],["Quellwasser","Quellfassung"],["Oberflächenwasser","Talsperre / See"]],sol:"Grundwasser → Brunnen; Quellwasser → Quellfassung; Oberflächenwasser → Talsperre/See."},
 {id:"2e2",s:2,d:"easy",t:"mcq",q:"Womit wird Grundwasser typischerweise erschlossen?",o:["Brunnen","Dachrinne","Heizkessel"],a:0,sol:"Grundwasser wird typischerweise über Brunnen gewonnen."},
 {id:"2e3",s:2,d:"easy",t:"multi",q:"Welche drei Rohwasserquellen zeigt die Lernlandkarte?",o:["Grundwasser","Quellwasser","Oberflächenwasser","Meerwasser als Standardquelle"],a:["Grundwasser","Quellwasser","Oberflächenwasser"],sol:"Die drei dargestellten Quellen sind Grundwasser, Quellwasser und Oberflächenwasser."},
 {id:"2m1",s:2,d:"medium",t:"mcq",q:"Welche Aussage beschreibt Oberflächenwasser am besten?",o:["Es stammt aus Seen, Flüssen oder Talsperren.","Es kommt nur aus Hausleitungen.","Es entsteht erst im Wasserwerk."],a:0,sol:"Oberflächenwasser stammt aus oberirdischen Gewässern wie Seen, Flüssen oder Talsperren."},
 {id:"2m2",s:2,d:"medium",t:"short",q:"Nenne einen Unterschied zwischen Grundwasser und Oberflächenwasser.",kw:["boden","unterirdisch","see","fluss","talsperre","oberfläche"],sol:"Beispiel: Grundwasser befindet sich unterirdisch im Boden bzw. Gestein; Oberflächenwasser liegt in Seen, Flüssen oder Talsperren."},
 {id:"2m3",s:2,d:"medium",t:"match",q:"Ordne Quelle und typische Fassung.",pairs:[["Quelle","Quellfassung"],["Grundwasserleiter","Brunnen"],["See","Entnahmebauwerk"]],sol:"Quelle → Quellfassung; Grundwasserleiter → Brunnen; See → Entnahmebauwerk."},
 {id:"2h1",s:2,d:"hard",t:"short",q:"Bewerte: Welche Rohwasserquelle ist grundsätzlich immer die beste?",kw:["abhängig","qualität","standort","schutz","aufbereitung","keine"],sol:"Es gibt keine grundsätzlich immer beste Quelle. Eignung hängt u. a. von Qualität, Schutz, Menge, Standort und Aufbereitungsbedarf ab."},
 {id:"2h2",s:2,d:"hard",t:"mcq",q:"Ein See ist nach Starkregen deutlich belastet. Welche Folgerung ist plausibel?",o:["Oberflächenwasser kann stärkeren kurzfristigen Einflüssen ausgesetzt sein.","Grundwasser ist immer sofort genauso betroffen.","Aufbereitung ist grundsätzlich unnötig."],a:0,sol:"Oberflächenwasser kann auf Wetterereignisse und Einträge vergleichsweise schnell reagieren."},
 {id:"2h3",s:2,d:"hard",t:"multi",q:"Welche Kriterien sind bei der Auswahl einer Rohwasserquelle sinnvoll?",o:["Wasserqualität","verfügbare Menge","Schutz vor Verunreinigung","Aufbereitungsaufwand","Farbe des Pumpenhauses"],a:["Wasserqualität","verfügbare Menge","Schutz vor Verunreinigung","Aufbereitungsaufwand"],sol:"Entscheidend sind vor allem Qualität, Menge, Schutz und notwendiger Aufbereitungsaufwand."},

 // 3 — Aufbereitung
 {id:"3e1",s:3,d:"easy",t:"order",q:"Bringe diese Aufbereitungsschritte in eine plausible Reihenfolge.",items:["Belüftung","Filtration","Enteisenung / Entmanganung","Desinfektion"],a:["Belüftung","Filtration","Enteisenung / Entmanganung","Desinfektion"],sol:"Eine plausible Reihenfolge der Lernlandkarte ist: Belüftung → Filtration → Enteisenung/Entmanganung → Desinfektion."},
 {id:"3e2",s:3,d:"easy",t:"mcq",q:"Welcher Schritt entfernt Partikel mit Hilfe eines Filtermaterials?",o:["Filtration","Speicherung","Hausanschluss"],a:0,sol:"Bei der Filtration wird Wasser durch Filtermaterial geleitet."},
 {id:"3e3",s:3,d:"easy",t:"tf",q:"Enthärtung ist in jedem Wasserwerk zwingend erforderlich.",a:false,sol:"Falsch. Enthärtung ist nur in bestimmten Fällen sinnvoll bzw. erforderlich."},
 {id:"3m1",s:3,d:"medium",t:"short",q:"Erkläre die Aufgabe der Filtration.",kw:["partikel","stoffe","entfer","filter","zurück"],sol:"Filtration hält Partikel bzw. bestimmte Stoffe im Filtermaterial zurück und verbessert dadurch die Wasserqualität."},
 {id:"3m2",s:3,d:"medium",t:"mcq",q:"Wozu dient Desinfektion?",o:["Zur Verringerung bzw. Inaktivierung unerwünschter Mikroorganismen.","Zur Erhöhung der Wasserhärte.","Nur zur Kühlung."],a:0,sol:"Desinfektion dient der hygienischen Sicherheit, indem unerwünschte Mikroorganismen reduziert oder inaktiviert werden."},
 {id:"3m3",s:3,d:"medium",t:"match",q:"Ordne Aufbereitungsschritt und Hauptziel.",pairs:[["Filtration","Partikel/Stoffe zurückhalten"],["Desinfektion","Mikroorganismen reduzieren"],["Enteisenung","Eisen entfernen"]],sol:"Filtration → Partikel/Stoffe zurückhalten; Desinfektion → Mikroorganismen reduzieren; Enteisenung → Eisen entfernen."},
 {id:"3h1",s:3,d:"hard",t:"short",q:"Begründe, warum Enthärtung nur bei bestimmten Rohwässern sinnvoll ist.",kw:["härte","calcium","magnesium","bedarf","nicht immer"],sol:"Die Wasserhärte ist je nach Rohwasser unterschiedlich. Deshalb besteht nicht überall ein Bedarf zur Enthärtung."},
 {id:"3h2",s:3,d:"hard",t:"mcq",q:"Ein Rohwasser enthält viele Schwebstoffe und zusätzlich hygienische Belastungen. Welche Kombination ist am plausibelsten?",o:["Filtration und anschließend geeignete Desinfektion","Nur Speicherung","Nur Enthärtung"],a:0,sol:"Filtration adressiert Partikel, Desinfektion die hygienische Belastung."},
 {id:"3h3",s:3,d:"hard",t:"multi",q:"Welche Aussagen zeigen, dass Aufbereitung an die Rohwasserqualität angepasst werden muss?",o:["Nicht jedes Rohwasser enthält dieselben Stoffe.","Aufbereitungsschritte haben unterschiedliche Ziele.","Einheitliche Behandlung ist immer optimal.","Manche Schritte sind optional."],a:["Nicht jedes Rohwasser enthält dieselben Stoffe.","Aufbereitungsschritte haben unterschiedliche Ziele.","Manche Schritte sind optional."],sol:"Die Auswahl der Schritte hängt von den Eigenschaften und Belastungen des Rohwassers ab."},

 // 4 — Weg
 {id:"4e1",s:4,d:"easy",t:"order",q:"Ordne den Weg des Trinkwassers.",items:["Wasserwerk","Hochbehälter / Wasserturm","Rohrnetz","Hausanschluss","Trinkwasserinstallation","Zapfstelle"],a:["Wasserwerk","Hochbehälter / Wasserturm","Rohrnetz","Hausanschluss","Trinkwasserinstallation","Zapfstelle"],sol:"Wasserwerk → Hochbehälter/Wasserturm → Rohrnetz → Hausanschluss → Trinkwasserinstallation → Zapfstelle."},
 {id:"4e2",s:4,d:"easy",t:"mcq",q:"Was kommt im dargestellten Weg direkt vor der Trinkwasserinstallation im Gebäude?",o:["Hausanschluss","Quelle","Filterbecken"],a:0,sol:"Der Hausanschluss verbindet das öffentliche Netz mit dem Gebäude."},
 {id:"4e3",s:4,d:"easy",t:"tf",q:"Die Zapfstelle ist die Stelle, an der Trinkwasser entnommen wird.",a:true,sol:"Richtig, zum Beispiel an einem Wasserhahn."},
 {id:"4m1",s:4,d:"medium",t:"short",q:"Beschreibe kurz den Weg des Trinkwassers vom Wasserwerk bis zum Wasserhahn.",kw:["wasserwerk","rohrnetz","hausanschluss","installation","zapfstelle"],sol:"Vom Wasserwerk gelangt das Wasser über Speicherung/Netz zum Hausanschluss, durch die Trinkwasserinstallation und schließlich zur Zapfstelle."},
 {id:"4m2",s:4,d:"medium",t:"mcq",q:"Welche Hauptaufgabe hat ein Hochbehälter?",o:["Wasser speichern und den Versorgungsdruck unterstützen.","Wasser färben.","Abwasser reinigen."],a:0,sol:"Hochbehälter speichern Wasser und tragen zur Druckhaltung bzw. Versorgungssicherheit bei."},
 {id:"4m3",s:4,d:"medium",t:"match",q:"Ordne Bauteil und Funktion.",pairs:[["Rohrnetz","Wasser verteilen"],["Hausanschluss","Gebäude mit Netz verbinden"],["Zapfstelle","Wasser entnehmen"]],sol:"Rohrnetz → verteilen; Hausanschluss → Gebäude anbinden; Zapfstelle → Wasser entnehmen."},
 {id:"4h1",s:4,d:"hard",t:"short",q:"Erkläre, warum Höhenlage bei einem Hochbehälter für den Druck hilfreich sein kann.",kw:["höhe","druck","schwerkraft","wassersäule"],sol:"Die Höhenlage erzeugt durch die Wassersäule hydrostatischen Druck und kann so die Versorgung unterstützen."},
 {id:"4h2",s:4,d:"hard",t:"mcq",q:"Im Netz fällt der Druck plötzlich ab. Welche Stelle könnte als Speicher- und Druckpuffer wichtig sein?",o:["Hochbehälter","Zapfstelle","Quellfassung im Haus"],a:0,sol:"Ein Hochbehälter kann Wasser bevorraten und zur Stabilisierung des Netzdrucks beitragen."},
 {id:"4h3",s:4,d:"hard",t:"multi",q:"Welche Punkte gehören zur sicheren Verteilung?",o:["ausreichender Druck","intaktes Rohrnetz","hygienische Trinkwasserinstallation","offene Verbindung zum Abwasser"],a:["ausreichender Druck","intaktes Rohrnetz","hygienische Trinkwasserinstallation"],sol:"Sicher sind ausreichender Druck, ein intaktes Netz und eine hygienisch einwandfreie Installation."},

 // 5 — Anforderungen und Schutz
 {id:"5e1",s:5,d:"easy",t:"multi",q:"Welche Begriffe gehören zum Themenfeld Schutz?",o:["Grenzwerte","Rückflussschutz","sichere Versorgung","offene Verbindung zu Nichttrinkwasser"],a:["Grenzwerte","Rückflussschutz","sichere Versorgung"],sol:"Grenzwerte, Rückflussschutz und sichere Versorgung sind zentrale Schutzthemen."},
 {id:"5e2",s:5,d:"easy",t:"mcq",q:"Was soll Rückflussschutz verhindern?",o:["Dass verunreinigtes Wasser in die Trinkwasserinstallation zurückgelangt.","Dass Wasser überhaupt fließt.","Dass ein Hochbehälter gefüllt wird."],a:0,sol:"Rückflussschutz verhindert, dass verunreinigte Flüssigkeiten in die Trinkwasserinstallation zurückfließen."},
 {id:"5e3",s:5,d:"easy",t:"tf",q:"Grenzwerte dienen dem Schutz der Trinkwasserqualität.",a:true,sol:"Richtig. Grenzwerte legen zulässige Konzentrationen bzw. Anforderungen fest."},
 {id:"5m1",s:5,d:"medium",t:"short",q:"Erkläre den Sinn eines Grenzwertes.",kw:["maximal","zulässig","schutz","gesundheit","wert"],sol:"Ein Grenzwert legt einen zulässigen Höchst- oder Richtwert fest und dient dem Schutz der Gesundheit bzw. Qualität."},
 {id:"5m2",s:5,d:"medium",t:"mcq",q:"Warum sind Sicherungseinrichtungen gegen Rückfließen wichtig?",o:["Sie schützen das Trinkwassersystem vor Verunreinigung.","Sie erhöhen immer die Temperatur.","Sie ersetzen alle Kontrollen."],a:0,sol:"Sie verhindern, dass belastete Flüssigkeiten in das Trinkwassersystem zurückgelangen."},
 {id:"5m3",s:5,d:"medium",t:"match",q:"Ordne Begriff und Bedeutung.",pairs:[["Grenzwert","zulässige Grenze"],["Rückflussschutz","Rückverunreinigung verhindern"],["Versorgungssicherheit","Wasser zuverlässig bereitstellen"]],sol:"Grenzwert → zulässige Grenze; Rückflussschutz → Rückverunreinigung verhindern; Versorgungssicherheit → zuverlässig bereitstellen."},
 {id:"5h1",s:5,d:"hard",t:"short",q:"Beurteile die mögliche Folge eines fehlenden Rückflussschutzes.",kw:["verunreinig","rückfluss","gesundheit","netz","trinkwasser"],sol:"Ohne Rückflussschutz können belastete Flüssigkeiten in die Trinkwasserinstallation zurückgelangen und die Wasserqualität bzw. Gesundheit gefährden."},
 {id:"5h2",s:5,d:"hard",t:"mcq",q:"Ein Schlauch liegt in einem Behälter mit verunreinigtem Wasser und ist direkt mit Trinkwasser verbunden. Was ist das Kernrisiko?",o:["Rückfließen bzw. Rücksaugen verunreinigter Flüssigkeit.","Zu geringe Wasserhärte.","Zu viel Sauerstoff."],a:0,sol:"Die direkte Verbindung kann bei ungünstigen Druckverhältnissen eine Rückverunreinigung verursachen."},
 {id:"5h3",s:5,d:"hard",t:"multi",q:"Welche Maßnahmen unterstützen den Schutz der Trinkwasserinstallation?",o:["geeignete Sicherungseinrichtungen","fachgerechte Installation","regelmäßige Kontrolle","bewusstes Verbinden mit Nichttrinkwasser"],a:["geeignete Sicherungseinrichtungen","fachgerechte Installation","regelmäßige Kontrolle"],sol:"Technische Sicherung, fachgerechte Installation und Kontrollen sind zentrale Schutzmaßnahmen."},

 // 6 — Praxis
 {id:"6e1",s:6,d:"easy",t:"mcq",q:"Welche Liste enthält nur Trinkwasserquellen aus der Lernlandkarte?",o:["Grundwasser, Quellwasser, Oberflächenwasser","Abwasser, Heizungswasser, Kühlwasser","Regenrinne, Boiler, Kanal"],a:0,sol:"Grundwasser, Quellwasser und Oberflächenwasser."},
 {id:"6e2",s:6,d:"easy",t:"order",q:"Ordne den vereinfachten Ablauf.",items:["Rohwasser gewinnen","Wasser aufbereiten","Wasser speichern/verteilen","Wasser an Zapfstelle entnehmen"],a:["Rohwasser gewinnen","Wasser aufbereiten","Wasser speichern/verteilen","Wasser an Zapfstelle entnehmen"],sol:"Gewinnen → Aufbereiten → Speichern/Verteilen → Entnehmen."},
 {id:"6e3",s:6,d:"easy",t:"tf",q:"Trinkwasser gelangt nach der Aufbereitung über das Verteilnetz zu den Verbrauchern.",a:true,sol:"Richtig."},
 {id:"6m1",s:6,d:"medium",t:"short",q:"Erkläre die Trinkwasserversorgung in drei Schritten.",kw:["gewinn","aufbereit","verteil"],sol:"Beispiel: Rohwasser gewinnen → je nach Qualität aufbereiten → über Speicher und Rohrnetz verteilen."},
 {id:"6m2",s:6,d:"medium",t:"mcq",q:"Welche Kombination beschreibt eine sichere Versorgung am besten?",o:["geeignete Quelle + passende Aufbereitung + geschütztes Verteilnetz","nur große Rohre","nur kaltes Wasser"],a:0,sol:"Sicherheit entsteht als Kette aus geeigneter Quelle, passender Aufbereitung und geschützter Verteilung."},
 {id:"6m3",s:6,d:"medium",t:"match",q:"Ordne die Praxisfrage dem Themenbereich zu.",pairs:[["Wo kommt das Rohwasser her?","Gewinnung"],["Wie werden Stoffe entfernt?","Aufbereitung"],["Wie kommt Wasser ins Gebäude?","Verteilung"]],sol:"Quelle → Gewinnung; Stoffentfernung → Aufbereitung; Weg ins Gebäude → Verteilung."},
 {id:"6h1",s:6,d:"hard",t:"mcq",q:"Fall: Nach Starkregen ist das Rohwasser trüber als üblich. Was ist die beste Denkweise?",o:["Aufbereitung und Überwachung an die aktuelle Rohwasserqualität anpassen.","Keine Reaktion, solange es farblos wirkt.","Nur den Druck erhöhen."],a:0,sol:"Ändert sich die Rohwasserqualität, müssen Überwachung und ggf. Aufbereitung passend reagieren."},
 {id:"6h2",s:6,d:"hard",t:"short",q:"Fall: In einem Betrieb besteht eine mögliche Verbindung zwischen Trinkwasser und Prozesswasser. Welche Schutzidee ist zentral?",kw:["trennung","rückfluss","sicherung","verhindern"],sol:"Die Systeme müssen so getrennt bzw. gesichert werden, dass kein Prozesswasser in die Trinkwasserinstallation zurückfließen kann."},
 {id:"6h3",s:6,d:"hard",t:"multi",q:"Welche Aussagen zeigen ein gutes Gesamtverständnis der Trinkwasserversorgung?",o:["Schutz beginnt schon an der Rohwasserquelle.","Aufbereitung muss zur Wasserqualität passen.","Verteilung und Hausinstallation gehören zur hygienischen Kette.","Nur das Wasserwerk ist für Qualität relevant."],a:["Schutz beginnt schon an der Rohwasserquelle.","Aufbereitung muss zur Wasserqualität passen.","Verteilung und Hausinstallation gehören zur hygienischen Kette."],sol:"Die Sicherheit beruht auf einer durchgängigen Kette von Quelle, Aufbereitung, Verteilung und Installation."}
];

const $ = sel => document.querySelector(sel);
const sectionSelect = $("#sectionSelect");
topics.forEach(t=>{ const o=document.createElement("option"); o.value=t.id; o.textContent=`${t.id}. ${t.title}`; sectionSelect.appendChild(o); });

let state = JSON.parse(localStorage.getItem("trinkwasserProgress") || '{"done":0,"correct":0,"score":0,"streak":0,"answered":{}}');
let current = null;
let orderState = [];

function save(){ localStorage.setItem("trinkwasserProgress", JSON.stringify(state)); updateStats(); }
function updateStats(){
  $("#doneCount").textContent=state.done; $("#correctCount").textContent=state.correct; $("#streakCount").textContent=state.streak; $("#levelCount").textContent=state.score; $("#score").textContent=state.score;
  const pct = Math.min(100, Math.round((Object.keys(state.answered).length / bank.length)*100));
  $("#progressText").textContent=pct+" %"; $("#progressBar").style.width=pct+"%";
}
function topicInfo(){
  const t=topics.find(x=>x.id==sectionSelect.value);
  $("#topicCard").innerHTML=`<h2>${t.id}. ${t.title}</h2><p>${t.desc}</p>`;
}
function pickTask(randomAll=false){
  let pool;
  if(randomAll) pool=bank;
  else pool=bank.filter(x=>x.s==sectionSelect.value && x.d==$("#difficultySelect").value);
  const unseen=pool.filter(x=>!state.answered[x.id]);
  const source=unseen.length?unseen:pool;
  current=source[Math.floor(Math.random()*source.length)];
  renderTask();
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function renderTask(){
  if(!current)return;
  sectionSelect.value=current.s; $("#difficultySelect").value=current.d; topicInfo();
  const names={easy:"Leicht",medium:"Mittel",hard:"Schwer"};
  const badge=$("#difficultyBadge"); badge.textContent=names[current.d]; badge.className="badge "+current.d;
  $("#taskTitle").textContent=`Thema ${current.s}: ${topics.find(t=>t.id===current.s).title}`;
  $("#taskMeta").textContent=`Aufgabentyp: ${typeName(current.t)}`;
  $("#feedback").textContent=""; $("#feedback").className="feedback"; $("#solution").hidden=true; $("#solution").textContent="";
  const b=$("#taskBody"); b.innerHTML=`<p class="question">${esc(current.q)}</p>`;
  orderState=[];
  if(current.t==="mcq"){
    current.o.forEach((o,i)=>b.insertAdjacentHTML("beforeend",`<label class="option"><input type="radio" name="answer" value="${i}"><span>${esc(o)}</span></label>`));
  } else if(current.t==="multi"){
    current.o.forEach(o=>b.insertAdjacentHTML("beforeend",`<label class="option"><input type="checkbox" name="answer" value="${esc(o)}"><span>${esc(o)}</span></label>`));
  } else if(current.t==="tf"){
    b.insertAdjacentHTML("beforeend",`<label class="option"><input type="radio" name="answer" value="true">Richtig</label><label class="option"><input type="radio" name="answer" value="false">Falsch</label>`);
  } else if(current.t==="short"){
    b.insertAdjacentHTML("beforeend",`<label>Deine Antwort<textarea class="text-answer" id="shortAnswer" rows="3" placeholder="Formuliere kurz in eigenen Worten …"></textarea></label>`);
  } else if(current.t==="order"){
    orderState=[...current.items].sort(()=>Math.random()-.5); renderOrder();
  } else if(current.t==="match"){
    const answers=current.pairs.map(p=>p[1]).sort(()=>Math.random()-.5);
    current.pairs.forEach((p,i)=>{
      b.insertAdjacentHTML("beforeend",`<div class="match-row"><strong>${esc(p[0])}</strong><select data-match="${i}"><option value="">– auswählen –</option>${answers.map(a=>`<option value="${esc(a)}">${esc(a)}</option>`).join("")}</select></div>`);
    });
  }
}
function renderOrder(){
  let wrap=$("#orderWrap");
  if(!wrap){wrap=document.createElement("div");wrap.id="orderWrap";wrap.className="order-list";$("#taskBody").appendChild(wrap);}
  wrap.innerHTML="";
  orderState.forEach((item,i)=>{
    const row=document.createElement("div"); row.className="order-item";
    row.innerHTML=`<span>${i+1}. ${esc(item)}</span><button type="button" aria-label="nach oben" ${i===0?"disabled":""}>↑</button><button type="button" aria-label="nach unten" ${i===orderState.length-1?"disabled":""}>↓</button>`;
    const [up,down]=row.querySelectorAll("button");
    up.addEventListener("click",()=>{[orderState[i-1],orderState[i]]=[orderState[i],orderState[i-1]];renderOrder();});
    down.addEventListener("click",()=>{[orderState[i+1],orderState[i]]=[orderState[i],orderState[i+1]];renderOrder();});
    wrap.appendChild(row);
  });
}
function typeName(t){return ({mcq:"Single Choice",multi:"Mehrfachauswahl",tf:"Richtig/Falsch",short:"Kurzantwort",order:"Reihenfolge",match:"Zuordnung"})[t]||t;}
function arraysEqual(a,b){return a.length===b.length && a.every((v,i)=>v===b[i]);}
function check(){
  let ok=false, answered=true;
  if(current.t==="mcq"){
    const x=document.querySelector('input[name="answer"]:checked'); answered=!!x; if(x) ok=Number(x.value)===current.a;
  } else if(current.t==="multi"){
    const vals=[...document.querySelectorAll('input[name="answer"]:checked')].map(x=>x.value).sort(); answered=vals.length>0; ok=arraysEqual(vals,[...current.a].sort());
  } else if(current.t==="tf"){
    const x=document.querySelector('input[name="answer"]:checked'); answered=!!x; if(x) ok=(x.value==="true")===current.a;
  } else if(current.t==="short"){
    const txt=$("#shortAnswer").value.trim().toLowerCase(); answered=txt.length>0; ok=current.kw.some(k=>txt.includes(k.toLowerCase()));
  } else if(current.t==="order"){
    ok=arraysEqual(orderState,current.a);
  } else if(current.t==="match"){
    const sels=[...document.querySelectorAll("[data-match]")]; answered=sels.every(s=>s.value); ok=answered && sels.every((s,i)=>s.value===current.pairs[i][1]);
  }
  if(!answered){showFeedback(false,"Bitte gib zuerst eine Antwort ein.");return;}
  const first=!state.answered[current.id];
  if(first){state.done++; state.answered[current.id]=ok;}
  if(ok){
    if(first) state.correct++;
    state.streak++;
    const pts=current.d==="easy"?1:current.d==="medium"?2:3;
    if(first) state.score+=pts;
    showFeedback(true,`Richtig! ${first?`+${pts} Punkt${pts>1?"e":""}.`:"Diese Aufgabe hattest du schon bearbeitet."}`);
  } else {
    state.streak=0;
    showFeedback(false,"Noch nicht richtig. Prüfe deine Antwort oder sieh dir die Lösung an.");
  }
  save();
}
function showFeedback(ok,msg){const f=$("#feedback");f.textContent=msg;f.className="feedback "+(ok?"ok":"no");}
$("#taskForm").addEventListener("submit",e=>{e.preventDefault();check();});
$("#solutionBtn").addEventListener("click",()=>{const s=$("#solution");s.textContent=current.sol;s.hidden=false;});
$("#nextBtn").addEventListener("click",()=>pickTask(false));
$("#newTaskBtn").addEventListener("click",()=>pickTask(false));
$("#randomBtn").addEventListener("click",()=>pickTask(true));
$("#sectionSelect").addEventListener("change",()=>{topicInfo();pickTask(false);});
$("#difficultySelect").addEventListener("change",()=>pickTask(false));
document.querySelectorAll(".hotspot").forEach(b=>b.addEventListener("click",()=>{sectionSelect.value=b.dataset.section;topicInfo();pickTask(false);document.querySelector(".controls").scrollIntoView({behavior:"smooth",block:"start"});}));
$("#resetBtn").addEventListener("click",()=>{
  if(confirm("Möchtest du deinen lokalen Lernfortschritt wirklich löschen?")){
    state={done:0,correct:0,score:0,streak:0,answered:{}}; save(); pickTask(false);
  }
});
topicInfo();updateStats();pickTask(false);
