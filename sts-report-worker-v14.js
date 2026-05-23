function getHTML() {
  var parts = [];
  parts.push('<!DOCTYPE html><html lang="en"><head>');
  parts.push('<meta charset="UTF-8" />');
  parts.push('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
  parts.push('<title>Local Review &amp; Reputation Snapshot</title>');
  parts.push('<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />');
  parts.push('<style>');
  parts.push('*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}');
  parts.push('body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#fff;min-height:100vh;padding:2rem 1rem;color:#1d3557}');
  parts.push('.container{max-width:720px;margin:0 auto}');
  parts.push('.tool-header{margin-bottom:1.5rem}');
  parts.push('.tool-header .logo{font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#457b9d;margin-bottom:6px}');
  parts.push('.tool-header h1{font-size:20px;font-weight:600;color:#1d3557}');
  parts.push('.input-card{background:#fff;border-radius:12px;border:1px solid #c8dbe8;padding:1.25rem;margin-bottom:1.5rem}');
  parts.push('.url-row{display:flex;gap:8px}');
  parts.push('.url-row input{flex:1;padding:10px 14px;border:1px solid #c8dbe8;border-radius:8px;font-size:14px;color:#1d3557;outline:none}');
  parts.push('.url-row input:focus{border-color:#457b9d;box-shadow:0 0 0 3px rgba(69,123,157,0.12)}');
  parts.push('.url-row button{padding:10px 20px;background:#1d3557;color:#eef3f7;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap}');
  parts.push('.url-row button:hover{background:#2b4a6b}');
  parts.push('.url-row button:disabled{opacity:0.5;cursor:not-allowed}');
  parts.push('.hint{font-size:12px;color:#457b9d;margin-top:8px}');
  parts.push('.status-msg{font-size:13px;color:#457b9d;padding:10px 0;display:none}');
  parts.push('.error-msg{font-size:13px;color:#e63946;padding:10px 0;display:none}');
  parts.push('.report-card{background:#fff;border-radius:12px;border:1px solid #c8dbe8;overflow:hidden;display:none}');
  parts.push('.report-header{background:#fff;padding:1.5rem 1.75rem;text-align:center;border-top:4px solid #1d3557;border-bottom:4px solid #1d3557}');
  parts.push('.biz-hero{font-family:"Nunito Sans",sans-serif;font-size:26px;font-weight:700;color:#1d3557;display:block;margin-bottom:4px}');
  parts.push('.report-title{font-family:"Nunito Sans",sans-serif;font-size:14px;font-weight:600;color:#457b9d;display:block;margin-bottom:2px}');
  parts.push('.report-sub{font-size:12px;color:#7a98ad;display:block;margin-bottom:8px}');
  parts.push('.prepared-by{font-size:11px;color:#c8dbe8;letter-spacing:0.05em;text-transform:uppercase;display:block}');
  parts.push('.report-body{padding:1.5rem}');
  parts.push('.opp-block{margin-bottom:1.5rem}');
  parts.push('.opp-head{display:flex;align-items:center;gap:10px;margin-bottom:12px}');
  parts.push('.opp-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}');
  parts.push('.opp-icon.rep{background:#d6e4ed;color:#1d3557}');
  parts.push('.opp-icon.gbp{background:#a8dadc;color:#1d3557}');
  parts.push('.opp-icon.web{background:#fde8d8;color:#c45e1a}');
  parts.push('.opp-title{font-size:15px;font-weight:600;color:#1d3557}');
  parts.push('.stat-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:12px}');
  parts.push('.stat-chip{background:#eef3f7;border-radius:8px;padding:12px 14px;border:1px solid #d6e4ed}');
  parts.push('.stat-chip .val{font-size:22px;font-weight:700;color:#1d3557}');
  parts.push('.stat-chip .lbl{font-size:11px;color:#457b9d;margin-top:3px;font-weight:500}');
  parts.push('.stat-chip .sublbl{font-size:10px;color:#7a98ad;margin-top:2px}');
  parts.push('.stat-chip.alert .val{color:#c45e1a}');
  parts.push('.stat-chip.alert{border-color:#f4a261}');
  parts.push('.opp-line{font-size:13px;color:#1d3557;background:#eef3f7;border-left:3px solid #457b9d;border-radius:0 8px 8px 0;padding:12px 14px;line-height:1.65}');
  parts.push('.gbp-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}');
  parts.push('.check-item{display:flex;align-items:center;gap:8px;font-size:13px;color:#2b4a6b}');
  parts.push('.check-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}');
  parts.push('.check-dot.pass{background:#1D9E75}');
  parts.push('.check-dot.fail{background:#f4a261}');
  parts.push('.comp-wrap{margin-top:14px}');
  parts.push('.sec-label{font-size:11px;font-weight:600;letter-spacing:0.07em;text-transform:uppercase;color:#457b9d;margin-bottom:6px}');
  parts.push('.comp-note{font-size:12px;color:#457b9d;margin-bottom:10px;line-height:1.6}');
  parts.push('.comp-table{width:100%;border-collapse:collapse;font-size:13px}');
  parts.push('.comp-table th{text-align:left;padding:7px 10px;font-size:11px;font-weight:600;color:#457b9d;border-bottom:1px solid #c8dbe8}');
  parts.push('.comp-table td{padding:7px 10px;border-bottom:1px solid #d6e4ed;color:#1d3557}');
  parts.push('.comp-table tr.me td{font-weight:700;color:#1d3557;background:#eef3f7}');
  parts.push('.sec-divider{border:none;border-top:1px solid #d6e4ed;margin:1.25rem 0}');
  parts.push('.report-footer{border-top:1px solid #d6e4ed;padding:1.25rem 1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;background:#eef3f7}');
  parts.push('.footer-contact{font-size:12px;color:#457b9d;line-height:1.7}');
  parts.push('.footer-contact strong{color:#1d3557;font-weight:600}');
  parts.push('.print-btn{font-size:12px;padding:6px 14px;border-radius:8px;background:#fff;border:1px solid #c8dbe8;cursor:pointer;color:#457b9d;font-weight:500}');
  parts.push('.print-btn:hover{background:#d6e4ed}');
  parts.push('.back-btn{font-size:13px;color:#457b9d;background:none;border:none;cursor:pointer;margin-bottom:1.25rem;display:flex;align-items:center;gap:6px;padding:0}');
  parts.push('.back-btn:hover{color:#1d3557}');
  parts.push('@media print{body{background:white;padding:0}.input-card,.back-btn,.print-btn{display:none !important}.report-card{display:block !important;border:none}}');
  parts.push('</style></head><body><div class="container">');
  parts.push('<div class="tool-header"><div class="logo">Streamlined Tech Systems</div><h1>Opportunity Summary Generator</h1></div>');
  parts.push('<div class="input-card" id="input-card">');
  parts.push('<div class="url-row">');
  parts.push('<input type="text" id="report-url" placeholder="https://prod.analyzemy.business/#/share/report/..." />');
  parts.push('<button id="fetch-btn" onclick="fetchReport()">Generate summary</button>');
  parts.push('</div>');
  parts.push('<div class="hint">Paste the shareable report URL from GHL\'s prospecting tool</div>');
  parts.push('<div class="status-msg" id="status-msg">Fetching report data...</div>');
  parts.push('<div class="error-msg" id="error-msg"></div>');
  parts.push('</div>');
  parts.push('<div id="report-wrap">');
  parts.push('<button class="back-btn" id="back-btn" onclick="resetTool()" style="display:none;">&larr; New report</button>');
  parts.push('<div class="report-card" id="report-card">');
  parts.push('<div class="report-header">');
  parts.push('<span class="biz-hero" id="o-name"></span>');
  parts.push('<span class="report-title">Local Review &amp; Reputation Snapshot</span>');
  parts.push('<span class="report-sub">Public review activity, local Google context, and follow-up opportunities.</span>');
  parts.push('<span class="prepared-by">Prepared by Streamlined Tech Systems</span>');
  parts.push('</div>');
  parts.push('<div class="report-body">');
  parts.push('<div class="opp-block">');
  parts.push('<div class="opp-head"><div class="opp-icon rep">&#9733;</div><div class="opp-title">Review request &amp; response opportunity</div></div>');
  parts.push('<div class="stat-row">');
  parts.push('<div class="stat-chip"><div class="val" id="o-gmb-total"></div><div class="lbl">Google reviews</div></div>');
  parts.push('<div class="stat-chip"><div class="val" id="o-gmb-rating"></div><div class="lbl">Current Google rating</div></div>');
  parts.push('<div class="stat-chip alert"><div class="val" id="o-neg-reviews"></div><div class="lbl">Reviews without a response</div><div class="sublbl" id="o-neg-sublbl"></div></div>');
  parts.push('<div class="stat-chip alert"><div class="val">Opportunity</div><div class="lbl">Consistent follow-up</div><div class="sublbl">Review requests + responses</div></div>');
  parts.push('</div>');
  parts.push('<div class="opp-line" id="o-rep-opp"></div>');
  parts.push('</div>');
  parts.push('<hr class="sec-divider" />');
  parts.push('<div class="opp-block">');
  parts.push('<div class="opp-head"><div class="opp-icon rep">&#9776;</div><div class="opp-title">Local Google review context</div></div>');
  parts.push('<div class="comp-note">This does not measure service quality. It simply shows the review count a customer may see when comparing nearby options on Google.</div>');
  parts.push('<table class="comp-table"><thead><tr><th>Business</th><th>Google reviews</th></tr></thead><tbody id="o-comp-body"></tbody></table>');
  parts.push('</div>');
  parts.push('<hr class="sec-divider" />');
  parts.push('<div class="opp-block">');
  parts.push('<div class="opp-head"><div class="opp-icon gbp">&#9679;</div><div class="opp-title">Google Business Profile snapshot</div></div>');
  parts.push('<div class="stat-row"><div class="stat-chip"><div class="val" id="o-gbp-score"></div><div class="lbl">Profile completeness</div></div></div>');
  parts.push('<div class="gbp-checks" id="o-gbp-checks"></div>');
  parts.push('<div class="opp-line" id="o-gbp-opp"></div>');
  parts.push('</div>');
  parts.push('<hr class="sec-divider" />');
  parts.push('<div class="opp-block">');
  parts.push('<div class="opp-head"><div class="opp-icon web">&#9675;</div><div class="opp-title">Additional online presence note</div></div>');
  parts.push('<div class="opp-line" id="o-web-opp"></div>');
  parts.push('</div>');
  parts.push('</div>');
  parts.push('<div class="report-footer">');
  parts.push('<div class="footer-contact"><strong>Streamlined Tech Systems</strong><br/>hello@streamlinedtechsys.com</div>');
  parts.push('<button class="print-btn" onclick="window.print()">Save as PDF</button>');
  parts.push('</div></div></div></div>');
  parts.push('<script>');
  parts.push('function getScore(grades,name){var g=(grades||[]).find(function(x){return x.name===name;});return g?g.value:null;}');
  parts.push('async function fetchReport(){');
  parts.push('var urlInput=document.getElementById("report-url").value.trim();');
  parts.push('var statusEl=document.getElementById("status-msg");');
  parts.push('var errorEl=document.getElementById("error-msg");');
  parts.push('var btn=document.getElementById("fetch-btn");');
  parts.push('errorEl.style.display="none";errorEl.textContent="";');
  parts.push('var match=urlInput.match(/\\/share\\/report\\/([a-f0-9]+)/i);');
  parts.push('if(!match){errorEl.textContent="URL format not recognized. Make sure you copied the full share link from GHL.";errorEl.style.display="block";return;}');
  parts.push('var prospectId=match[1];btn.disabled=true;statusEl.style.display="block";');
  parts.push('try{');
  parts.push('var res=await fetch("/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prospectId:prospectId,reportLanguage:"en-US"})});');
  parts.push('if(!res.ok)throw new Error("Request failed: "+res.status);');
  parts.push('var data=await res.json();');
  parts.push('statusEl.style.display="none";btn.disabled=false;renderReport(data);');
  parts.push('}catch(err){statusEl.style.display="none";btn.disabled=false;errorEl.textContent="Could not fetch report data. "+err.message;errorEl.style.display="block";}}');
  parts.push('function renderReport(d){');
  parts.push('var biz=d.name||"Your Business";');
  parts.push('document.getElementById("o-name").textContent=biz;');
  parts.push('var grades=d.gradingSheetScores||[];');
  parts.push('var gmbTotal=d.gmbTotalRatings||0;');
  parts.push('var gmbRating=d.gmbAvgRating||0;');
  parts.push('var repGmb=(d.reputation&&d.reputation.gmb)||{};');
  parts.push('var negReviews=repGmb.negative||0;');
  parts.push('document.getElementById("o-gmb-total").textContent=gmbTotal?Number(gmbTotal).toLocaleString():"--";');
  parts.push('document.getElementById("o-gmb-rating").textContent=gmbRating?Number(gmbRating).toFixed(1)+" star":"--";');
  parts.push('document.getElementById("o-neg-reviews").textContent=negReviews||"--";');
  parts.push('if(negReviews>0){document.getElementById("o-neg-sublbl").textContent="Includes negative reviews";}');
  parts.push('var repOpp="";');
  parts.push('if(negReviews>3){repOpp=biz+" already has review activity to build from. The main opportunity is more consistent follow-up and response tracking, especially on Google. Responding to reviews, including the critical ones, shows potential customers how the business handles feedback.";}');
  parts.push('else if(gmbTotal>0){repOpp="With "+Number(gmbTotal).toLocaleString()+" Google reviews and a "+Number(gmbRating).toFixed(1)+"-star rating, the review foundation is solid. The opportunity is in building volume consistently and making sure every review gets a timely, on-brand response.";}');
  parts.push('else{repOpp="Building a consistent review presence is one of the highest-impact steps a local business can take. A simple follow-up system makes it easier to gather reviews and respond to them without adding work to the day.";}');
  parts.push('document.getElementById("o-rep-opp").textContent=repOpp;');
  parts.push('var heatmap=d.heatMap||[];');
  parts.push('var tbody=document.getElementById("o-comp-body");tbody.innerHTML="";');
  parts.push('var seen={};var comps=[];');
  parts.push('heatmap.forEach(function(entry){if(entry.hotSpots){entry.hotSpots.forEach(function(spot){if(spot.topBusinesses){spot.topBusinesses.forEach(function(b){if(b.name&&b.name!==biz&&!seen[b.name]){seen[b.name]=true;comps.push({name:b.name,reviews:b.userRatingsTotal||0});}});}});}});');
  parts.push('comps.sort(function(a,b){return b.reviews-a.reviews;});');
  parts.push('comps.slice(0,3).forEach(function(c){var tr=document.createElement("tr");tr.innerHTML="<td>"+c.name+"</td><td>"+Number(c.reviews).toLocaleString()+"</td>";tbody.appendChild(tr);});');
  parts.push('var meRow=document.createElement("tr");meRow.className="me";meRow.innerHTML="<td>"+biz+"</td><td>"+Number(gmbTotal).toLocaleString()+"</td>";tbody.appendChild(meRow);');
  parts.push('var gbpScore=getScore(grades,"Google Business Profile");');
  parts.push('var gbpScoreDisplay=gbpScore!==null?gbpScore+"%":"--";');
  parts.push('document.getElementById("o-gbp-score").textContent=gbpScoreDisplay;');
  parts.push('var gmbData=d.gmbData||{};');
  parts.push('var checks=[');
  parts.push('{label:"Business address",val:!!(d.address)},');
  parts.push('{label:"Photos",val:!!(gmbData.photos&&gmbData.photos>0)},');
  parts.push('{label:"Hours of operation",val:!!(gmbData.openingHours||gmbData.regularHours||gmbData.hours)},');
  parts.push('{label:"Phone number",val:!!(d.phone||d.cPhone)},');
  parts.push('{label:"Website linked",val:!!(d.website)}];');
  parts.push('var checksEl=document.getElementById("o-gbp-checks");checksEl.innerHTML="";');
  parts.push('checks.forEach(function(c){var div=document.createElement("div");div.className="check-item";div.innerHTML="<span class=\\"check-dot "+(c.val?"pass":"fail")+"\\"></span>"+c.label;checksEl.appendChild(div);});');
  parts.push('var hasWebsite=!!(d.website);');
  parts.push('var gbpOpp="";');
  parts.push('if(!hasWebsite&&gbpScore!==null){gbpOpp="At "+gbpScoreDisplay+", the profile is in good shape overall. The main gap is a linked website. A website gives Google and potential customers another place to confirm business details, services, and next steps, supporting a more complete local presence.";}');
  parts.push('else if(gbpScore!==null&&gbpScore>=80){gbpOpp="At "+gbpScoreDisplay+", the profile is in solid shape. Ongoing maintenance, keeping photos fresh, responding to Q&As, and posting updates, is what separates businesses that hold strong visibility from those that gradually slip.";}');
  parts.push('else{gbpOpp="At "+gbpScoreDisplay+", there are a few gaps in the profile worth addressing. A more complete profile gives potential customers the information they need to feel confident reaching out.";}');
  parts.push('document.getElementById("o-gbp-opp").textContent=gbpOpp;');
  parts.push('var webOpp="";');
  parts.push('if(!hasWebsite){webOpp="No linked website was detected in this snapshot. A website can give potential customers another place to learn about services, confirm details, and decide whether to reach out.";}');
  parts.push('else{webOpp="A website is present. The opportunity is in making sure it is linked correctly to the Google Business Profile and loads well on mobile, where most local searches happen.";}');
  parts.push('document.getElementById("o-web-opp").textContent=webOpp;');
  parts.push('document.getElementById("input-card").style.display="none";');
  parts.push('document.getElementById("back-btn").style.display="flex";');
  parts.push('document.getElementById("report-card").style.display="block";}');
  parts.push('function resetTool(){document.getElementById("report-url").value="";document.getElementById("error-msg").style.display="none";document.getElementById("input-card").style.display="block";document.getElementById("back-btn").style.display="none";document.getElementById("report-card").style.display="none";}');
  parts.push('<\/script></body></html>');
  return parts.join('');
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }
    if (url.pathname === '/proxy' && request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch(e) { return new Response('Invalid JSON', { status: 400 }); }
      const { prospectId, reportLanguage = 'en-US' } = body;
      if (!prospectId) return new Response('prospectId is required', { status: 400 });
      const ghlResponse = await fetch(
        'https://services.leadconnectorhq.com/prospecting/report/share?trackReportCount=true',
        { method: 'POST', headers: { 'Content-Type': 'application/json', 'Channel': 'APP' }, body: JSON.stringify({ prospectId, reportLanguage }) }
      );
      const data = await ghlResponse.json();
      return new Response(JSON.stringify(data), {
        status: ghlResponse.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
    return new Response(getHTML(), { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
  },
};
