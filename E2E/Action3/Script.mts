Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com/"
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click

Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set DataTable("username")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set DataTable("pass")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("Sign-In").Click

