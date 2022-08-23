import { SSHKeySetupStyled } from './SSHKeySetupStyles';

const SSHKeySetup = () => {
  return (
    <SSHKeySetupStyled>
      <h1>Setting up an SSH key</h1>
      <p>An SSH key gives a secure way to connect to Github. To create your SSH key, go to the terminal in VSCode. If the terminal doesn't show, go to the "View" menu and click "Terminal". </p>
      <p>Make sure that the terminal type is set to Git Bash.</p>
      <p>Keep typing <code>cd ..</code> until you reach the root folder.</p>
      <p>To set up your key, you will need to remember the email address that you used to sign up for GitHub. In the terminal, type <code>ssh-keygen -t ed25519 -C</code> and your email address in quotes.</p>
      <p>If you get an error, use <code>ssh-keygen -t rsa -b 4096 -C</code> with your email address. GitHub recommends using Ed25519 for higher security, but Rsa will work on older computers.</p>
      <p>When it asks you to enter the file, just hit the enter key.</p>
      <p>Type in a password. Note that the password you type will be invisible, and the cursor does not move, so it looks like nothing is happening until you hit the enter key! But don't panic, just type a password and hit enter.</p>
      <p>Type the same password again. The computer will save two files with the SSH key information.</p>
    </SSHKeySetupStyled>
  );
};

export default SSHKeySetup;
