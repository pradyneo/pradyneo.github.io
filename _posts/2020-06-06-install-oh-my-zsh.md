---
layout: single
title: iTerm2 + Oh-My-Zsh + PowerLevel10k
category: "Terminal"
tags: iTerm2, oh-my-zsh, Powerlevek10k
---

{: .text-justify}
Do you want the terminal on your Mac to look like this? If yes, then follow this article on how to configure your terminal.
![ohmyzsh-iterm-p10k](/assets/ohmyzsh-iterm.png)

{: .text-justify}
The image of the terminal shown above is of iTerm2, configured to use the Oh-My-Zsh framework and PowerLevel10K theme. This article will guide you through all the steps to configure your macOS terminal to have this visual effect. 

{: .notice--info}
**Read More:** You can read more about **Oh-My-Zsh** in [this link](https://ohmyz.sh).

## Install iTerm2

We will use **brew** to install iTerm2.

{: .notice--info}
**Read More** You can read about **Homebrew** and how to install it on your Mac [here](https://brew.sh).

```bash
brew cask install iterm2
```

## Installing Oh-My-Zsh

### Prerequisites
{: .text-justify}
You need to have a zsh-shell installed in your system. To check which zsh version you have, type the following command - 
```
zsh --version
```
You should be able to see the version of the zsh-shell version you have on your system. Example output - 
```
zsh 5.7.1 (x86_64-apple-darwin19.0)
```
If you don't have zsh installed, you can install it on your Mac as follows - 

1. Install zsh -
```
brew install zsh
```
2. Make zsh your default shell by typing the following command -
```
chsh -s /usr/local/bin/zsh
```

### Install Oh-My-Zsh

You can install **Oh-My-zsh**  using either curl or wget. 

#### curl command
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### wget command
```
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

{: .notice--info}
**Read More:** If you want to read about the differences between **curl** and **wget**, you can read [this blog by Daniel Stenberg](https://daniel.haxx.se/docs/curl-vs-wget.html).

You should see a screen like the image below after running the above command -
![oh-my-zsh-after-install](/assets/ohmyzsh-after-install.png)

{: .text-justify}
Now, lets change the default theme. Type the below command in your terminal to open up the .zshrc file for editing - 

```
nano ~/.zshrc
```

This file should look something like this -
![oh-my-zsh-zshrc-default-theme](/assets/ohmyzsh-default-theme.png)

{: .text-justify}
The red circle in the image is where the default theme is defined. We will now update it to **PowerLevel10k** theme. But before that, you need to download the **PowerLevel10k** theme since it doesn't come by default with **Oh-My-Zsh**.

<!---
Notice the  highlighted **?** mark blocks in the image above? That's because the **agnoster** theme needs to another plugin - **[Powerlevel10k](https://github.com/romkatv/powerlevel10k)** to display the fonts and thumbnails correctly. However, for PowerLevel10K to work correctly, we need the **Meslo Nerd Font** patched. Since, we are using iTerm2, we can configure it as part of the PowerLevel10k installation.
-->

## Installing PowerLevel10k

{: .text-justify}
1. Type the following commad in your terminal - 
```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```
2. Open the **.zshrc** for editing by typing ```nano ~/.zshrc```
3. Remember the **ZSH_THEME** highlighted in the image above? Update it to Powerlevel10k as follows -
```
ZSH_THEME="powerlevel10k/powerlevel10k"
```
4. Save and exit the **nano** editor and type again ```source  ~/.zshrc``` again for the zsh shell to pick up the changes.
5. Quit iTerm2.

{: .notice--info}
**QuickTip:** Shortcut-Keys to Quit iTerm -> command+q

## Configure PowerLevel10k

{: .text-justify}
Configuring PowerLevel10k is pretty straight forward. When you reopen iTerm2, you should be taken directly to the screen for configuring **PowerLevel10k**. If the interactive configuration doesn't show up, type ```p10k configure``` to bring the interactive configuration wizard. You can use ```p10k configure``` at any point of time to reconfigure the theme.

{: .notice--warning}
**NOTE:** PowerLevel10k requires **Meslo Nerd Font** patch, so please be sure to accept as 'y' when prompted.

{: .text-justify}
While navigating through the interactive window, select the options based on your liking and configure it. 

{: .text-justify}
This is an example window of the interactive window - 
![p10k-interactive-window](/assets/p10kinteractive.png)