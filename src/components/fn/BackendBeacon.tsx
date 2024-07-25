import React from 'react';

import { useClashConfig } from '$src/store/configs';

export function BackendBeacon() {
  return (
    <BackendBeaconCore />
  );
}

function BackendBeaconCore() {
  useClashConfig();
  return null;
}
