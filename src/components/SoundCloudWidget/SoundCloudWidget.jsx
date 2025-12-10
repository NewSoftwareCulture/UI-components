const SoundCloudWidget = ({
  url = '',
  color = '#e00000',
  width = 400,
  height = 100,
  auto_play = 'false',
  hide_related = 'true',
  show_comments = 'false',
  show_user = 'false',
  show_reposts = 'false',
  show_teaser = 'false',
  visual = 'false',
  buying = 'false',
  sharing = 'false',
  download = 'false',
  show_playcount = 'true',
  show_artwork = 'true',
  single_active = 'true'
}) => {
  const params = new URLSearchParams({
    url,
    color,
    auto_play,
    hide_related,
    show_comments,
    show_user,
    show_reposts,
    show_teaser,
    visual,
    buying,
    sharing,
    download,
    show_playcount,
    show_artwork,
    single_active
  }).toString();

  const embedUrl = `https://w.soundcloud.com/player/?${params}`;

  return (
    <div style={{ margin: '20px 0' }}>
      <iframe
        title="SoundCloud Player"
        width={width}
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      />
      <div style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }}> 
        <a
          href={url}
          title="SoundCloud"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          SoundCloud
        </a>
      </div>
    </div>
  );
};

export default SoundCloudWidget;