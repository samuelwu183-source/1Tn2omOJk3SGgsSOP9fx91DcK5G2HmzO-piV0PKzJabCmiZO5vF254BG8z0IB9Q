// SET YOUR EXPIRY HERE (UTC): year, month (1-12), day, hour (0-23), minute, second
    // Example: Aug 1, 2025 00:00:00 UTC
    const expiryUTC = Date.UTC(2025, 7, 11, 0, 0, 0);

    function showExpired() {
      const app = document.getElementById('app');
      app.innerHTML = `
      <div>
        <div class="header">
    <div class="icon-x">✖</div>
    Account Suspended
</div>

<div class="content">
    <h1>This Account has been suspended.</h1>
    <p><a href="#">Contact your hosting provider</a> for more information.</p>
</div>
</div>
      `;
      // OPTIONAL: redirect to another page after X ms (comment out if not wanted)
      // setTimeout(() => window.location.href = "https://example.com", 4000);
    }

    // Check once (you can also setInterval to update live)
    if (Date.now() > expiryUTC) {
      showExpired();
    } else {
      // If you want a live countdown, uncomment the block below
      /*
      const content = document.getElementById('content');
      function updateCountdown() {
        const diff = expiryUTC - Date.now();
        if (diff <= 0) return showExpired();
        const days = Math.floor(diff / (1000*60*60*24));
        const hrs  = Math.floor((diff / (1000*60*60)) % 24);
        const mins = Math.floor((diff / (1000*60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        content.textContent = `Host active — expires in ${days}d ${hrs}h ${mins}m ${secs}s (UTC)`;
      }
      updateCountdown();
      setInterval(updateCountdown, 1000);
      */
    }
