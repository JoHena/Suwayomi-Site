'use client';

import { useEffect } from "react";

export function TachiyomiExtensionRedirect() {
    useEffect(() => {
        window.location.href = "tachiyomi://add-repo?url=https://raw.githubusercontent.com/suwayomi/tachiyomi-extension/repo/index.min.json";
    }, []);

    return null;
}
