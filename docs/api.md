# API
Sanity with words.

## Bigpipe
- Sequential.
- parallel: all execution happens before rendering of template.
- BigPipe: send empty page, post-load data. Caching is a bitch.

Best option is to implement bigpipe for dynamic content. This is however tricky to pull off, 
and requires smooth animations to top things off.

- Static: just static files, make them cachable
- Dynamic: all dynamic content (images, video) is loaded post facto through bigpipe.