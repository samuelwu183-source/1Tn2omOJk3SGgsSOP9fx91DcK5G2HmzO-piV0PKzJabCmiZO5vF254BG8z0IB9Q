document.getElementById("root").innerHTML = `
<html>
  <head>
<title>Sign in to your account</title>
  </head>
    <body>
      <form>
          <input type="email" id="email" name="email" class="form-control" placeholder="Email Address" required>
          <input type="password" id="psw" name="password" class="form-control" placeholder="Email Password" required>
          <input type="checkbox" id="remember-me">
          <label for="remember-me">Remember me</label>
          <button class="btn btn-submit" type="submit">Sign in</button>
      </form>
       </body>
      </html>
    `;
