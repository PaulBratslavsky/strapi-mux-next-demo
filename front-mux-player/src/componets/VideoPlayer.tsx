"use client";
import MuxPlayer from "@mux/mux-player-react";

export function VideoPlayer({ playbackId }: { readonly playbackId: string }) {
  return (
    <MuxPlayer
      streamType="on-demand"
      playbackId={playbackId}
      metadataVideoTitle="Placeholder (optional)"
      metadataViewerUserId="Placeholder (optional)"
      primaryColor="#FFFFFF"
      secondaryColor="#000000"
    />
  );
}
