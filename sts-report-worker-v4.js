const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>STS Opportunity Summary</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f7f9; min-height: 100vh; padding: 2rem 1rem; color: #222; }
  .container { max-width: 720px; margin: 0 auto; }
  .tool-header { margin-bottom: 1.5rem; }
  .tool-header .logo { font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #457b9d; margin-bottom: 6px; }
  .tool-header h1 { font-size: 20px; font-weight: 600; color: #1d3557; }
  .input-card { background: #fff; border-radius: 12px; border: 1px solid #dde6ed; padding: 1.25rem; margin-bottom: 1.5rem; }
  .url-row { display: flex; gap: 8px; }
  .url-row input { flex: 1; padding: 10px 14px; border: 1px solid #c8dbe8; border-radius: 8px; font-size: 14px; color: #1d3557; outline: none; }
  .url-row input:focus { border-color: #457b9d; box-shadow: 0 0 0 3px rgba(69,123,157,0.12); }
  .url-row button { padding: 10px 20px; background: #1d3557; color: #eef3f7; border: none; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer; white-space: nowrap; }
  .url-row button:hover { background: #2b4a6b; }
  .url-row button:disabled { opacity: 0.5; cursor: not-allowed; }
  .hint { font-size: 12px; color: #7a98ad; margin-top: 8px; }
  .status-msg { font-size: 13px; color: #457b9d; padding: 10px 0; display: none; }
  .error-msg { font-size: 13px; color: #e63946; padding: 10px 0; display: none; }
  .report-card { background: #fff; border-radius: 12px; border: 1px solid #dde6ed; overflow: hidden; display: none; }
  .report-header { background: #1d3557; padding: 1.75rem; color: #eef3f7; }
  .sts-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #a8dadc; margin-bottom: 10px; }
  .biz-name { font-size: 24px; font-weight: 600; margin-bottom: 4px; }
  .report-sub { font-size: 13px; opacity: 0.65; }
  .report-body { padding: 1.5rem; }
  .opp-block { margin-bottom: 1.5rem; }
  .opp-head { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .opp-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
  .opp-icon.rep { background: #d6e4ed; color: #1d3557; }
  .opp-icon.gbp { background: #a8dadc; color: #1d3557; }
  .opp-icon.web { background: #fde8d8; color: #c45e1a; }
  .opp-title { font-size: 16px; font-weight: 600; color: #1d3557; }
  .stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 10px; margin-bottom: 12px; }
  .stat-chip { background: #f4f7f9; border-radius: 8px; padding: 12px 14px; }
  .stat-chip .val { font-size: 22px; font-weight: 600; color: #1d3557; }
  .stat-chip .lbl { font-size: 11px; color: #7a98ad; margin-top: 3px; }
  .stat-chip.alert .val { color: #e63946; }
  .opp-line { font-size: 13px; color: #1d3557; background: #eef3f7; border-left: 3px solid #457b9d; border-radius: 0 8px 8px 0; padding: 12px 14px; line-height: 1.65; }
  .gbp-checks { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px; }
  .check-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #4a6070; }
  .check-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
  .check-dot.pass { background: #1D9E75; }
  .check-dot.fail { background: #e63946; }
  .comp-wrap { margin-top: 14px; }
  .sec-label { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: #7a98ad; margin-bottom: 8px; }
  .comp-table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .comp-table th { text-align: left; padding: 7px 10px; font-size: 11px; font-weight: 600; color: #7a98ad; border-bottom: 1px solid #e8eef2; }
  .comp-table td { padding: 7px 10px; border-bottom: 1px solid #f0f4f7; color: #333; }
  .comp-table tr.me td { font-weight: 600; color: #1d3557; background: #eef3f7; }
  .sec-divider { border: none; border-top: 1px solid #eef1f4; margin: 1.25rem 0; }
  .report-footer { border-top: 1px solid #eef1f4; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-contact { font-size: 12px; color: #7a98ad; line-height: 1.7; }
  .footer-contact strong { color: #1d3557; font-weight: 600; }
  .print-btn { font-size: 13px; padding: 8px 18px; border-radius: 8px; background: transparent; border: 1px solid #c8dbe8; cursor: pointer; color: #457b9d; font-weight: 500; }
  .print-btn:hover { background: #eef3f7; }
  .back-btn { font-size: 13px; color: #7a98ad; background: none; border: none; cursor: pointer; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 6px; padding: 0; }
  .back-btn:hover { color: #1d3557; }
  @media print {
    body { background: white; padding: 0; }
    .input-card, .back-btn, .print-btn { display: none !important; }
    .report-card { display: block !important; border: none; box-shadow: none; }
  }
</style>
</head>
<body>
<div class="container">
  <div class="tool-header">
    <div class="logo">Streamlined Tech Systems</div>
    <h1>Opportunity Summary Generator</h1>
  </div>

  <div class="input-card" id="input-card">
    <div class="url-row">
      <input type="text" id="report-url" placeholder="https://prod.analyzemy.business/#/share/report/..." />
      <button id="fetch-btn" onclick="fetchReport()">Generate summary</button>
    </div>
    <div class="hint">Paste the shareable report URL from GHL's prospecting tool</div>
    <div class="status-msg" id="status-msg">Fetching report data...</div>
    <div class="error-msg" id="error-msg"></div>
  </div>

  <div id="report-wrap">
    <button class="back-btn" id="back-btn" onclick="resetTool()" style="display:none;">&#8592; New report</button>
    <div class="report-card" id="report-card">
      <div class="report-header">
        <div class="sts-label">Streamlined Tech Systems</div>
        <div class="biz-name" id="o-name"></div>
        <div class="report-sub">Online presence opportunity summary</div>
      </div>
      <div class="report-body">
        <div class="opp-block">
          <div class="opp-head">
            <div class="opp-icon rep">&#9733;</div>
            <div class="opp-title">Review growth &amp; response</div>
          </div>
          <div class="stat-row">
            <div class="stat-chip"><div class="val" id="o-gmb-total"></div><div class="lbl">Google reviews</div></div>
            <div class="stat-chip"><div class="val" id="o-gmb-rating"></div><div class="lbl">Star rating</div></div>
            <div class="stat-chip alert"><div class="val" id="o-reply-rate"></div><div class="lbl">Reviews answered</div></div>
            <div class="stat-chip alert"><div class="val" id="o-response-time"></div><div class="lbl">Avg response time</div></div>
          </div>
          <div class="opp-line" id="o-rep-opp"></div>
          <div class="comp-wrap">
            <div class="sec-label">How they compare locally</div>
            <table class="comp-table">
              <thead><tr><th>Business</th><th>Google reviews</th></tr></thead>
              <tbody id="o-comp-body"></tbody>
            </table>
          </div>
        </div>
        <hr class="sec-divider" />
        <div class="opp-block">
          <div class="opp-head">
            <div class="opp-icon gbp">&#9679;</div>
            <div class="opp-title">Google Business Profile</div>
          </div>
          <div class="stat-row">
            <div class="stat-chip"><div class="val" id="o-gbp-score"></div><div class="lbl">Profile completeness</div></div>
          </div>
          <div class="gbp-checks" id="o-gbp-checks"></div>
          <div class="opp-line" id="o-gbp-opp"></div>
        </div>
        <hr class="sec-divider" />
        <div class="opp-block">
          <div class="opp-head">
            <div class="opp-icon web">&#9675;</div>
            <div class="opp-title">Website presence</div>
          </div>
          <div class="opp-line" id="o-web-opp"></div>
        </div>
      </div>
      <div class="report-footer">
        <div class="footer-contact">
          <strong>Streamlined Tech Systems</strong><br/>
          hello@streamlinedtechsys.com
        </div>
        <button class="print-btn" onclick="window.print()">Save as PDF</button>
      </div>
    </div>
  </div>
</div>

<script>
function dig(obj) {
  var paths = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < paths.length; i++) {
    var keys = paths[i].split('.');
    var val = obj;
    for (var j = 0; j < keys.length; j++) {
      if (val == null) { val = null; break; }
      val = val[keys[j]];
    }
    if (val !== undefined && val !== null) return val;
  }
  return null;
}

async function fetchReport() {
  var urlInput = document.getElementById('report-url').value.trim();
  var statusEl = document.getElementById('status-msg');
  var errorEl = document.getElementById('error-msg');
  var btn = document.getElementById('fetch-btn');

  errorEl.style.display = 'none';
  errorEl.textContent = '';

  var match = urlInput.match(/\/share\/report\/([a-f0-9]+)/i);
  if (!match) {
    errorEl.textContent = 'URL format not recognized. Make sure you copied the full share link from GHL.';
    errorEl.style.display = 'block';
    return;
  }

  var prospectId = match[1];
  btn.disabled = true;
  statusEl.style.display = 'block';

  try {
    var res = await fetch('/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prospectId: prospectId, reportLanguage: 'en-US' })
    });
    if (!res.ok) throw new Error('Request failed: ' + res.status);
    var data = await res.json();
    statusEl.style.display = 'none';
    btn.disabled = false;
    renderReport(data);
  } catch(err) {
    statusEl.style.display = 'none';
    btn.disabled = false;
    errorEl.textContent = 'Could not fetch report data. ' + err.message;
    errorEl.style.display = 'block';
  }
}

function renderReport(d) {
  var biz = dig(d, 'businessName', 'name', 'business.name') || 'Your Business';
  document.getElementById('o-name').textContent = biz;

  var gmbTotal = dig(d, 'reputation.google.totalReviews', 'reputation.totalGmbReviews', 'reputation.gmbReviews', 'reputationData.totalGmbReviews');
  var gmbRating = dig(d, 'reputation.google.rating', 'reputation.gmbRating', 'reputation.totalGmbRating', 'reputationData.totalGmbRating');
  var replyRate = dig(d, 'reputation.reviewReplyPercentage', 'reputation.replyRate', 'reputationData.reviewReplyPercentage');
  var responseTime = dig(d, 'reputation.averageResponseTime', 'reputation.avgResponseTime', 'reputationData.averageResponseTime') || '\u2014';
  var negCount = dig(d, 'reputation.negativeReviewsFound', 'reputation.negativeReviews', 'reputationData.negativeReviewsFound') || 0;

  document.getElementById('o-gmb-total').textContent = gmbTotal !== null ? Number(gmbTotal).toLocaleString() : '\u2014';
  document.getElementById('o-gmb-rating').textContent = gmbRating !== null ? Number(gmbRating).toFixed(1) + ' \u2605' : '\u2014';
  document.getElementById('o-reply-rate').textContent = replyRate !== null ? Math.round(replyRate) + '%' : '\u2014';
  document.getElementById('o-response-time').textContent = responseTime;

  var replyNum = replyRate !== null ? Math.round(replyRate) : null;
  var negNum = parseInt(negCount) || 0;
  var repOpp = '';
  if (replyNum !== null && replyNum < 30 && negNum > 0) {
    repOpp = biz + ' is currently responding to ' + replyNum + '% of reviews, with ' + negNum + ' negative reviews sitting unanswered. Every unanswered review is a missed chance to show potential customers how the business handles feedback \u2014 one of the strongest trust signals in local search.';
  } else if (replyNum !== null && replyNum < 50) {
    repOpp = 'With a ' + replyNum + '% response rate, there\u2019s a real opportunity to build more trust with potential customers. Businesses that respond consistently rank higher in local search and convert more first-time visitors into bookings.';
  } else {
    repOpp = 'The review foundation is solid. The opportunity is in building volume and making sure every review gets a timely, on-brand response.';
  }
  document.getElementById('o-rep-opp').textContent = repOpp;

  var competitors = dig(d, 'seo.localRankTracker', 'seo.competitors', 'seoData.localRankTracker', 'localRankTracker') || [];
  var tbody = document.getElementById('o-comp-body');
  tbody.innerHTML = '';
  if (Array.isArray(competitors) && competitors.length > 0) {
    competitors.slice(0, 6).forEach(function(c) {
      var name = c.businessName || c.name || '';
      var reviews = c.reviews != null ? c.reviews : (c.reviewCount != null ? c.reviewCount : '');
      if (name && name !== biz) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + name + '</td><td>' + Number(reviews).toLocaleString() + '</td>';
        tbody.appendChild(tr);
      }
    });
  }
  var meRow = document.createElement('tr');
  meRow.className = 'me';
  meRow.innerHTML = '<td>' + biz + '</td><td>' + (gmbTotal !== null ? Number(gmbTotal).toLocaleString() : '\u2014') + '</td>';
  tbody.appendChild(meRow);

  var gbpScore = dig(d, 'googleBusinessProfile.score', 'googleBusinessProfile.percentage', 'gbp.score', 'googleBusinessProfileScore');
  var gbpScoreDisplay = gbpScore !== null ? Math.round(gbpScore) + '%' : '\u2014';
  document.getElementById('o-gbp-score').textContent = gbpScoreDisplay;

  var gbp = dig(d, 'googleBusinessProfile', 'gbp') || {};
  var checks = [
    { label: 'Business address', val: gbp.address != null ? gbp.address : gbp.businessAddress },
    { label: 'Photos', val: gbp.photos != null ? gbp.photos : gbp.googlePhotos },
    { label: 'Hours of operation', val: gbp.hours != null ? gbp.hours : gbp.operationalHours },
    { label: 'Phone number', val: gbp.phone != null ? gbp.phone : gbp.phoneNumber },
    { label: 'Website linked', val: gbp.website != null ? gbp.website : gbp.businessWebsite }
  ];
  var checksEl = document.getElementById('o-gbp-checks');
  checksEl.innerHTML = '';
  checks.forEach(function(c) {
    var pass = c.val === true || c.val === 'yes' || c.val === 1;
    var div = document.createElement('div');
    div.className = 'check-item';
    div.innerHTML = '<span class="check-dot ' + (pass ? 'pass' : 'fail') + '"></span>' + c.label;
    checksEl.appendChild(div);
  });

  var gbpScoreNum = gbpScore !== null ? Math.round(gbpScore) : 0;
  var hasWebsite = gbp.website === true || gbp.businessWebsite === true || gbp.website === 'yes';
  var gbpOpp = '';
  if (!hasWebsite) {
    gbpOpp = 'The profile scores ' + gbpScoreDisplay + ' \u2014 with the main gap being a linked website. Google uses the website connection as a trust and ranking signal. Adding one moves this profile from good to complete and positions the business to rank higher for local searches.';
  } else if (gbpScoreNum >= 80) {
    gbpOpp = 'At ' + gbpScoreDisplay + ', the profile is in solid shape. Ongoing maintenance \u2014 keeping photos fresh, responding to Q&As, posting updates \u2014 is what separates businesses that hold their ranking from those that gradually slip.';
  } else {
    gbpOpp = 'At ' + gbpScoreDisplay + ', the profile has meaningful gaps that affect how Google ranks the business in local search. Completing the missing elements is one of the most direct ways to improve visibility without paid advertising.';
  }
  document.getElementById('o-gbp-opp').textContent = gbpOpp;

  var techno = dig(d, 'technoStack', 'techStack', 'websitePerformance') || {};
  var websiteDetected = techno.websiteFound === true || techno.hasWebsite === true || (techno.score && techno.score > 0);
  var webOpp = '';
  if (!websiteDetected) {
    webOpp = 'No website was detected linked to this business. Google\u2019s local ranking algorithm uses a linked website as a trust signal \u2014 without one, the business is relying entirely on the GBP listing alone. A linked website also gives potential customers a place to learn more before calling, which improves the quality of inbound inquiries.';
  } else {
    webOpp = 'A website is present. The opportunity is in making sure it\u2019s linked correctly to the Google Business Profile and loads quickly on mobile \u2014 where the majority of local searches happen.';
  }
  document.getElementById('o-web-opp').textContent = webOpp;

  document.getElementById('input-card').style.display = 'none';
  document.getElementById('back-btn').style.display = 'flex';
  document.getElementById('report-card').style.display = 'block';
}

function resetTool() {
  document.getElementById('report-url').value = '';
  document.getElementById('error-msg').style.display = 'none';
  document.getElementById('input-card').style.display = 'block';
  document.getElementById('back-btn').style.display = 'none';
  document.getElementById('report-card').style.display = 'none';
}
</script>
</body>
</html>`;

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
      try {
        body = await request.json();
      } catch {
        return new Response('Invalid JSON', { status: 400 });
      }

      const { prospectId, reportLanguage = 'en-US' } = body;

      if (!prospectId) {
        return new Response('prospectId is required', { status: 400 });
      }

      const ghlResponse = await fetch(
        'https://services.leadconnectorhq.com/prospecting/report/share?trackReportCount=true',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Channel': 'APP',
          },
          body: JSON.stringify({ prospectId, reportLanguage }),
        }
      );

      const data = await ghlResponse.json();

      return new Response(JSON.stringify(data), {
        status: ghlResponse.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
    });
  },
};
