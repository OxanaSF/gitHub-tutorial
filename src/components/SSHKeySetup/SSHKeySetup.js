import { SSHKeySetupStyled } from './SSHKeySetupStyles';
import cdToRoot from './images/cd-to-root.png';
import sshEnterFile from './images/ssh-enter-file.png';
import sshKeygenEd25519 from './images/ssh-keygen-ed25519.png'
import terminalChooseGitBash from './images/terminal-choose-Git-Bash.png';


const SSHKeySetup = () => {
  return (
    <SSHKeySetupStyled>
      <h1>Setting up an SSH key</h1>
      <p>An SSH key gives a secure way to connect to GitHub. To create your SSH key, go to the terminal in VSCode. If the terminal doesn't show, go to the "View" menu and click "Terminal". </p>
      <p>Make sure that the terminal type is set to Git Bash. (If it isn't, click on the arrow next to the + sign, in the upper right part of the terminal.)</p>
      <img src={terminalChooseGitBash} alt='click on "Git Bash"' />
      <p>Repeat <code>cd ..</code> until you reach the root folder. (Hint: in the terminal, hitting the up arrow will re-show the previous thing you typed, so you won't have to keep re-typing "cd .." ).</p>
      <img src={cdToRoot} alt='repeat typing "cd .." until ~ is directory' />
      <p>To set up your key, you will need to remember the email address that you used to sign up for GitHub. In the terminal, type <code>ssh-keygen -t ed25519 -C</code> and your email address in quotes.</p>
      <img src={sshKeygenEd25519} alt='ssh-keygen -t ed25519 -C "address@email.com"' />
      <p>If you get an error, use <code>ssh-keygen -t rsa -b 4096 -C</code> with your email address. (GitHub recommends using Ed25519 for higher security, but Rsa will work on older computers.)</p>
      <p>When it asks you to enter the file, just hit the enter key.</p>
      <img src={sshEnterFile} alt='' />
      <p>Type in a password. Note that the password you type will be invisible, and the cursor does not move, so it looks like nothing is happening until you hit the enter key! But don't panic, just type a password and hit enter.</p>
      <p>Type the same password again. The computer will save two files with the SSH key information.</p>
      <p>Once the computer shows the information, type <code>eval $(ssh-agent -s)</code> to start the SSH agent.</p>
      <p>Add the key <code>ssh-add ~/.ssh/id_ed25519</code> (or <code>ssh-add ~/.ssh/id_rsa</code> if you used Rsa)</p>
      <p>Now copy the public key to your clipboard. On Windows, type <code>clip &lt; ~/.ssh/id_ed25519.pub</code> On a Mac, use <code>pbcopy &lt; ~/.ssh/id_ed25519.pub</code></p>
      <p>While keeping VSCode open (in case you need to re-copy the key), log into GitHub. Click on your profile in the upper right corner of the page. Choose "Settings" in the menu that drops down.</p>
      <p>In the list on the left side, click "SSH and GPG keys"</p>
      <p>Click "New SSH key" (in the upper right of the SSH Key section.)</p>
      <p>In "Title", type in a simple name to identify the device that you will use, such as "home laptop".</p>
      <p>Paste the key into the box labeled "key". If pasting doesn't work, you may have to switch over to VSCode, copy from the terminal again, and switch back to GitHub to paste. (Hint: if you're in the terminal, hitting the up arrow will re-show the previous thing you typed, so you won't have to re-type the copying command.)</p>
      <p>Click "Add SSH key". GitHub may ask you to type in your username and password to confirm. You should see your key listed now.</p>
    </SSHKeySetupStyled>
  );
};

export default SSHKeySetup;
