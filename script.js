var S=[["💗 Love & Attraction",[["Love Attraction","777"],["Love Binding","888"],["Self-Love & Confidence","999"],["Passion & Romance","1,111"],["Reconciliation","1,333"],["Soulmate Attraction","1,555"]]],
["💰 Money & Success",[["Money Attraction","777"],["Abundance & Prosperity","999"],["Business Success","1,111"],["Luck & Opportunity","1,333"]]],
["🛡️ Protection",[["Protection Ritual","777"],["Energy Cleansing","888"],["Evil-Eye Protection","999"],["Banishing & Protection","1,333"]]],
["✨ Glamour & Personal Power",[["Glamour Ritual","888"],["Beauty & Confidence","999"],["Personal Magnetism","1,222"]]],
["🔮 Spiritual",[["Intuition Enhancement","777"],["Spiritual Cleansing","999"],["Custom Ritual","777+"],["Healing Spell","666"]]]];
document.getElementById("spellGrid").innerHTML=S.map(function(c){return '<div class="cat"><h3>'+c[0]+'</h3><ul>'+c[1].map(function(s){return '<li><span>'+s[0].replace("&","&amp;")+'</span><b>₹'+s[1]+'</b></li>'}).join("")+'</ul></div>'}).join("");
document.addEventListener("click",function(e){for(var i=0;i<4;i++){var s=document.createElement("span");s.className="spark";s.textContent=["✦","✧","♡"][i%3];s.style.left=(e.clientX+i*9-14)+"px";s.style.top=(e.clientY-8)+"px";document.body.appendChild(s);setTimeout(function(x){x.remove()},1400,s)}});
