set -euo pipefail
out=$1
cd
export HISTFILE=/dev/null PS1='$ ' XDG_CURRENT_DESKTOP=GNOME LANG=C.UTF-8
mkdir -p "$HOME/.local/share/keyrings"
echo guide-test-password | gnome-keyring-daemon --unlock >/dev/null
gnome-keyring-daemon --start --components=secrets >/dev/null
openbox >"$out/wm.log" 2>&1 &
xterm -T Terminal -fa 'DejaVu Sans Mono' -fs 14 -bg '#242934' -fg '#f0f3f9' -geometry 77x12 -e script -q -f -c 'bash --noprofile --norc -i' "$out/terminal-log" &
sleep 2
id=$(xdotool search --onlyvisible --name '^Terminal$' | head -1)
xdotool windowactivate --sync "$id"
xdotool type --clearmodifiers --delay 8 'wget -qO- https://updates.phcode.io/linux/installer.sh | bash'
sleep 0.3
scrot -b -u -o "$out/linux-install-command.png"
xdotool key Return
for n in $(seq 1 160); do
 if grep -q 'Installation completed successfully' "$out/terminal-log"; then break; fi
 sleep 1
done
grep -q 'Installation completed successfully' "$out/terminal-log"
sleep 1
scrot -b -u -o "$out/linux-install-complete.png"
