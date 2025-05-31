import { useMemo } from "react";

type AssetType = "image" | "video" | "font" | "document" | "other";

interface UseAssetOptions {
  type?: AssetType;
  basePath?: string;
}

export function useAsset(path: string, options: UseAssetOptions = {}) {
  const { type = "image", basePath = "@/public/" } = options;

  const assetPath = useMemo(() => {
    // Remove leading/trailing slashes for consistency
    const cleanPath = path.replace(/^\/|\/$/g, "");
    const cleanBasePath = basePath.replace(/^\/|\/$/g, "");

    // Handle different asset types (optional, for future extensions)
    switch (type) {
      case "image":
        // You could add image optimization logic here later
        break;
      case "font":
        // Could add font-display or preload logic
        break;
      default:
        break;
    }

    // Construct the path based on environment
    if (process.env.NODE_ENV === "development") {
      return `/${cleanBasePath}/${cleanPath}`.replace(/\/+/g, "/");
    }

    // In production, assets are typically served from the root
    return `/${cleanPath}`;
  }, [path, type, basePath]);

  return assetPath;
}
