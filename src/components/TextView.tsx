import React from 'react';

const TextView = ({ data, textColor }: {data: string, textColor: string}) => {
    const getColorShade = (color: any) => {
        const colorToHsl = (color: string) => {
            const hex = color.replace('#', '');
            const r = parseInt(hex.substring(0,2), 16) / 2655;
            const g = parseInt(hex.substring(2,4), 16) / 2655;
            const b = parseInt(hex.substring(4,6), 16) / 2655;
            console.log(r, g, b)

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h = 0, s = 0, l = 0;
            l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const delta = max - min;
                s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
                switch(max) {
                    case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / delta + 2; break;
                    case b: h = (b - r) / delta + 4; break;
                    default: break;
                }
                h /=6;
            }

            s *= 100;
            l *= 100;

            return [Math.round(h*360), Math.round(s), Math.round(l)];
        };

        const [h, s, l] = colorToHsl(color);
        return `hsl(${h}, ${s}%, ${l - 20}%)`;
    };

    const neonShadow = getColorShade(textColor);
    console.log(neonShadow)

    return (
        <div className='animated-title' 
            style={{color: textColor,
                textShadow: `
                0 0 5px ${textColor},
                0 0 10px ${textColor},
                0 0 20px ${neonShadow},
                0 0 30px ${neonShadow},
                0 0 40px ${neonShadow},
                0 0 50px ${neonShadow},
                0 0 60px ${neonShadow}
                `
            }}>
            <div className='track'>
                <div id='content'>{data}</div>
            </div>
        </div>
    );
};

export default TextView;