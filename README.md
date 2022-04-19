# GPU profile selector Gnome-Shell-Extension
## Description
A simple gnome shell extension for switching GPU profiles on Nvidia Optimus systems (i.e laptops with Intel + Nvidia or AMD + Nvidia configurations).
In particular this extension is a graphic interface for [envycontrol](https://github.com/geminis3/envycontrol) program.

TODO: add image

## Dependencies
- [pkexec command](https://command-not-found.com/pkexec)
- [envycontrol](https://github.com/geminis3/envycontrol)

## Installation
Install all the dependencies, create `GPU_profile_selector@lorenzo9904.gmail.com` folder and clone this repo in `~/.local/share/gnome-shell/extensions/GPU_profile_selector@lorenzo9904.gmail.com`

TODO: public on official gnome shell extension https://extensions.gnome.org/


## Debuging

### For looking command line logs
```journalctl -f -o cat /usr/bin/gnome-shell```

### For looking updates using wayland (open a new wayland session in a window)
```dbus-run-session -- gnome-shell --nested --wayland```

## TODO
- Add a confirm dialog with restart later and restart now
- After profile is changed add a text at the end (reboot needed)
