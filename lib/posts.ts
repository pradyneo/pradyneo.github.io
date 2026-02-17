export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "getting-total-files-in-a-unix-system",
    title: "Getting the Total Number of Files/Folders in a Unix/Linux System Directory",
    category: "Unix",
    date: "May 15, 2020",
    readTime: "1 min read",
    excerpt:
      "A quick command-line trick to count the number of files or folders in any directory using ls and wc.",
    content: `There are times when we want to count the number of the files or folders in a directory. We can use the below trick to get that information.

## Command

\`\`\`bash
ls -1 | wc -l
\`\`\`

## Explanation

The \`ls\` command will **list** all the files/folders in the current directory. When \`-1\` is added to the option, it lists one file/folder per line as below:

\`\`\`bash
ls -1
foo.txt
bar.txt
\`\`\`

The \`wc\` command is the **word count** command in a Unix system. One of its options is \`-l\`, which counts the number of lines.

Thus, if we pipe the above two commands, the output of \`ls -1\` command (which lists the files/folders in the current directory) is taken as the input to the \`wc -l\` command (which counts the number of lines). Assuming \`foo.txt\` and \`bar.txt\` are the only files in the directory, the output of the above command will result as:

\`\`\`bash
ls -1 | wc -l
2
\`\`\``,
  },
  {
    slug: "install-oh-my-zsh",
    title: "iTerm2 + Oh-My-Zsh + PowerLevel10k",
    category: "Terminal",
    date: "Jun 6, 2020",
    readTime: "5 min read",
    excerpt:
      "A complete guide to configuring your macOS terminal with iTerm2, Oh-My-Zsh, and the PowerLevel10k theme for a beautiful and productive setup.",
    content: `Do you want your terminal to look sleek and modern? Follow this guide to configure your macOS terminal with iTerm2, Oh-My-Zsh, and the PowerLevel10k theme.

## Install iTerm2

We will use **brew** to install iTerm2.

\`\`\`bash
brew cask install iterm2
\`\`\`

## Installing Oh-My-Zsh

### Prerequisites

You need to have a zsh-shell installed in your system. To check which zsh version you have, type the following command:

\`\`\`bash
zsh --version
\`\`\`

You should see something like:

\`\`\`
zsh 5.7.1 (x86_64-apple-darwin19.0)
\`\`\`

If you don't have zsh installed, you can install it on your Mac:

\`\`\`bash
brew install zsh
chsh -s /usr/local/bin/zsh
\`\`\`

### Install Oh-My-Zsh

You can install Oh-My-Zsh using curl:

\`\`\`bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
\`\`\`

## Installing PowerLevel10k

1. Clone the theme repository:

\`\`\`bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
\`\`\`

2. Open **.zshrc** for editing: \`nano ~/.zshrc\`

3. Update the theme:

\`\`\`bash
ZSH_THEME="powerlevel10k/powerlevel10k"
\`\`\`

4. Save and exit, then run \`source ~/.zshrc\` for changes to take effect.

5. Quit and reopen iTerm2.

## Configure PowerLevel10k

When you reopen iTerm2, you should be taken directly to the screen for configuring PowerLevel10k. If the interactive configuration doesn't show up, type \`p10k configure\` to bring up the wizard.

> **Note:** PowerLevel10k requires the Meslo Nerd Font patch, so be sure to accept when prompted.

Navigate through the interactive window and select the options based on your preference.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts;
}
