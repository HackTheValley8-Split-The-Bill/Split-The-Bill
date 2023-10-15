import MuiAvatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringToInitials(string) {
  const names = string.split(' ');
  if (names.length === 1) {
    return `${names[0].charAt(0).toUpperCase()}${names[0].charAt(1).toLowerCase()}`;
  }
  return `${names[0].charAt(0).toUpperCase()}${names[names.length - 1].charAt(0).toUpperCase()}`;
}

export default function Avatar({ name, size, src }) {
  return (
    (src ?
      <MuiAvatar
        sx={{
          width: size,
          height: size
        }}
        alt={name}
        src={src}
      />
      :
      <MuiAvatar
        sx={{
          width: size,
          height: size,
          bgcolor: stringToColor(name)
        }}
        children={stringToInitials(name)}
      />
    )
  );
}