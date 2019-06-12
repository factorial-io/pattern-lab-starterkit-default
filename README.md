# StarterKit for Factorial PatternLab

The StarterKit is meant to be used in all new Factorial projects.
It uses the default Factorial folder structure, please read more about this here: [Default Folder Structure](https://confluence.factorial.io/display/WIKI/Patternlab+default+folder+structure).

## Requirements

This StarterKit requires the following PatternEngine:

* `pattern-lab/patternengine-twig`: [documentation](https://github.com/pattern-lab/patternengine-php-twig#twig-patternengine-for-pattern-lab), [GitHub](https://github.com/pattern-lab/patternengine-php-twig), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-twig)

## Install

This StarterKit can be installed via one of the following commands:

    php core/console --starterkit --install factorial-io/pattern-lab-starterkit-folders

It is recommended that you **do not** install this StarterKit as a dependency for your Pattern Lab project via Composer.

## Usage in pattern-lab-edition-factorial

When using the starter in **pattern-lab-edition-factorial** you need to replace **"@factorial/frontend-stack-postcss-export-custom-variables"** in the **neutrinorc.js** file:

    [
      "@factorial/frontend-stack-postcss-export-custom-variables", {
        destination: "source/_patterns/00-theme/theme.json",
      }
    ]

## Edit Files

After installation the files for this StarterKit can be found in `source/`.
