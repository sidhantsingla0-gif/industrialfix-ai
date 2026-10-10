export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      service: 'industrialfix-api',
      uptimeSeconds: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    },
  });
};