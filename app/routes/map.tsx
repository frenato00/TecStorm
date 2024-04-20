import React from "react";
import { ClientOnly } from "remix-utils/client-only";

import { MapWindow } from "~/components/MapWindow.client";
// import { StyleSheet, View } from 'react-native';

export default function Map() {
  return (
    <ClientOnly>
      {() => {
        return <MapWindow />;
      }}
    </ClientOnly>
  );
}
