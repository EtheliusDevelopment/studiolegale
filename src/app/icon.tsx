import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Studio Legale Iannilli & Partners Favicon";
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse aspect ratio 1:1
            <div
                style={{
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Three bars mimicking the logo mark */}
                <div
                    style={{
                        display: "flex",
                        gap: "2px",
                        transform: "skewX(-15deg)",
                    }}
                >
                    {/* Orange Bar */}
                    <div
                        style={{
                            width: "6px",
                            height: "20px",
                            background: "#f4a236",
                        }}
                    />
                    {/* Teal Bar */}
                    <div
                        style={{
                            width: "8px",
                            height: "24px",
                            background: "#2c7a7b",
                            marginTop: "-2px",
                        }}
                    />
                    {/* Anthracite Bar */}
                    <div
                        style={{
                            width: "7px",
                            height: "22px",
                            background: "#1a1e21",
                            marginTop: "1px",
                        }}
                    />
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
