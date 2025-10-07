// SET YOUR EXPIRY HERE (UTC): year, month (1-12), day, hour (0-23), minute, second
    // Example: Aug 1, 2025 00:00:00 UTC
    const expiryUTC = Date.UTC(2025, 7, 11, 0, 0, 0);

    function showExpired() {
      const app = document.getElementById('app');
      app.innerHTML = `
      body {
        background-color: #f1f1f1;
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      .container { margin: 50px auto 40px auto; width: 600px; text-align: center; }

      a { color: #4183c4; text-decoration: none; }
      a:hover { text-decoration: underline; }

      h1 { width: 800px; position:relative; left: -100px; letter-spacing: -1px; line-height: 60px; font-size: 60px; font-weight: 100; margin: 0px 0 50px 0; text-shadow: 0 1px 0 #fff; }
      p { color: rgba(0, 0, 0, 0.5); margin: 20px 0; line-height: 1.6; }

      ul { list-style: none; margin: 25px 0; padding: 0; }
      li { display: table-cell; font-weight: bold; width: 1%; }

      .logo { display: inline-block; margin-top: 35px; }
      .logo-img-2x { display: none; }
      @media
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (   min--moz-device-pixel-ratio: 2),
      only screen and (     -o-min-device-pixel-ratio: 2/1),
      only screen and (        min-device-pixel-ratio: 2),
      only screen and (                min-resolution: 192dpi),
      only screen and (                min-resolution: 2dppx) {
        .logo-img-1x { display: none; }
        .logo-img-2x { display: inline-block; }
      }

      #suggestions {
        margin-top: 35px;
        color: #ccc;
      }
      #suggestions a {
        color: #666666;
        font-weight: 200;
        font-size: 14px;
        margin: 0 10px;
      }

    </style>
	
  <body>

    <div class="container">

      <h1>Account Suspended</h1>
      <p><strong>This Account has been suspended.</strong></p>

      <p>
        This site is no longer available.
      </p>
	  </div>
  </body>
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
