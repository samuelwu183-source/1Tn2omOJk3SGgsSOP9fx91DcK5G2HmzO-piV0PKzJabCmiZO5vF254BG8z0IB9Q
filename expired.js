// SET YOUR EXPIRY HERE (UTC): year, month (1-12), day, hour (0-23), minute, second
    // Example: Aug 1, 2025 00:00:00 UTC
    const expiryUTC = Date.UTC(2025, 7, 11, 0, 0, 0);

    function showExpired() {
      const app = document.getElementById('app');
      app.innerHTML = `
      <style>
      /* ===== Account Suspended Header ===== */
	.header {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: #f5f5f5;
        color: #999;
        font-size: 22px;
    }

	.header img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ccc;
        margin-right: 10px;
    }

	.header .icon-x {
		font-weight: bold;
		margin-right: 5px;
		color: #999;
	}

	/* ===== Account Suspended Content ===== */
	.content {
        background-color: #1d3c52;
        padding: 30px 20px;
        color: white;
    }

	.content h1 {
		font-size: 28px;
		margin-bottom: 20px;
	}

	.content p {
		font-size: 18px;
		margin: 0;
	}

	.content a {
		color: white;
		text-decoration: underline;
	}

	/* ===== Responsive Adjustments ===== */
	@media (max-width: 1024px) {
		.content h1 {
			font-size: 24px;
		}
		.content p {
			font-size: 16px;
		}
		.header img {
			width: 45px;
			height: 45px;
		}
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			font-size: 20px;
			padding: 15px;
		}

		.header img {
			margin-bottom: 8px;
		}

		.content {
			padding: 25px 15px;
		}

		.content h1 {
			font-size: 22px;
		}

		.content p {
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		.content {
			padding: 20px 10px;
		}

		.content h1 {
			font-size: 20px;
		}

		.content p {
			font-size: 13px;
		}

		.header {
			font-size: 18px;
		}

		.header img {
			width: 35px;
			height: 35px;
		}
	}
</style>


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
