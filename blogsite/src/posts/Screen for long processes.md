1736102000
Screen for long processes
# Screen

screen is a linux command line utility which allows you to detatch and join terminal sessions.

It's especially useful for when you want to ssh into something, and set up a process that will run idenfinitely.
If you tried to `npm serve` and then exit the ssh session, the serve command will be stopped. That's where screen comes in.

## Example
You can use screen to serve this blog with npm like so:
1. Start a new screen session by running `screen -S <session_name>`
2. You are now within the session. You can now use `npm serve` to serve the blog
3. Detach by using `Ctrl + a` followed by `d` (This leaves the session running in the background)

## Reattach
If you want to reattach later, use `screen -r`. This will bring you back to the terminal where the command or program is running, as if you never left.

## Summary
Using `screen` allows you to keep your processes running even if you disconnect from the terminal or close the terminal window. It is especially useful for long-running tasks or remote sessions.

