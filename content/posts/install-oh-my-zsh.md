---
title: "iTerm2 + Oh-My-Zsh + PowerLevel10k"
category: "Terminal"
date: "2020-06-06"
readTime: "5 min read"
excerpt: "A complete guide to configuring your macOS terminal with iTerm2, Oh-My-Zsh, and the PowerLevel10k theme for a beautiful and productive setup."
status: "published"
---

Do you want your terminal to look sleek and modern? Follow this guide to configure your macOS terminal with iTerm2, Oh-My-Zsh, and the PowerLevel10k theme.

## Install iTerm2

We will use **brew** to install iTerm2.

```bash
brew cask install iterm2
```

## Installing Oh-My-Zsh

### Prerequisites

You need to have a zsh-shell installed in your system. To check which zsh version you have, type the following command:

```bash
zsh --version
```

You should see something like:

```
zsh 5.7.1 (x86_64-apple-darwin19.0)
```

If you don't have zsh installed, you can install it on your Mac:

```bash
brew install zsh
chsh -s /usr/local/bin/zsh
```

### Install Oh-My-Zsh

You can install Oh-My-Zsh using curl:

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Installing PowerLevel10k

1. Clone the theme repository:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. Open **.zshrc** for editing: `nano ~/.zshrc`

3. Update the theme:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

4. Save and exit, then run `source ~/.zshrc` for changes to take effect.

5. Quit and reopen iTerm2.

## Configure PowerLevel10k

When you reopen iTerm2, you should be taken directly to the screen for configuring PowerLevel10k. If the interactive configuration doesn't show up, type `p10k configure` to bring up the wizard.

> **Note:** PowerLevel10k requires the Meslo Nerd Font patch, so be sure to accept when prompted.

Navigate through the interactive window and select the options based on your preference.
