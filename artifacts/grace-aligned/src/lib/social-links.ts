export const youtubeChannelUrl =
  'https://youtube.com/@gracealignedchristian?si=eLK4oE7fiO5PBuXM';

export const instagramUrl = 'https://www.instagram.com/grace_aligned/';

// TODO: replace with the owner's real Gmail address.
export const contactEmail = 'yourname@gmail.com';

export const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
  'Hello from the Grace Aligned website',
)}`;

/** Opens a Gmail compose window in the browser, pre-addressed to Grace Aligned. */
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contactEmail,
)}&su=${encodeURIComponent('Hello from the Grace Aligned website')}`;
