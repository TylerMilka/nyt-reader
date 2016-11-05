# nyt-reader

1. Create an organization on Github
2. Create a repo for the project
3. Add team members as colaborators
4. Each team member will fork the organization's repo
5. Clone the fork to your local computer
 ** note, check your origin and confirm it's your fork
 not the original repo
6. Here's a new step, you'll need to add a new remote:

  `git remote add upstream <url to the ORGANIZATIONS REPO>`

  - This will allow you to pull down changes from the original organizations repo into your local repo
  - DO NOT PUSH to your upstream directly, you'll push to your fork and submit a pull request from your fork to the org's repo. Someone will need to merge this on the team.
  - Ensure the latest upstream is pulled down, this is as great practice to do before you open a pull request.

  `git fetch upstream`
  
  `git pull upstream master`

  - If you have merge conflicts and need help, please reach out and one of us can help you resolve it.


**Harder challenge**

After the initial code is working as described via slack, now create as nodejs application that will make the same ajax call but instead of displaying the article titles on the screen, you'll use the cylonjs api and cylon-speech platform to read aloud the headlines/titles only.
             
https://cylonjs.com/
https://cylonjs.com/documentation/platforms/speech/
