'use client'

import { createContext, useEffect, useState } from "react";

const C = 262.815;     // middle C
const D = 295;
const Eb = 312.541;
const E = 331.126;
const F = 350.816;
const G = 393.777;
const Ab = 417.192;
const B = 496.128;

// According to the game rule, health is 8, which is exactly the number of notes in a scale.
// So, it'll play each note in a scale every time the player lose health.
const MINOR_SCALE = [B, Ab, G, F, Eb, D, C];

const SoundContext = createContext({
    playScale: (index: number) => {},
    winSound: () => {},
    loseSound: () => {}
})

const SoundProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [actx, setActx] = useState<AudioContext>()
    
    let out: AudioDestinationNode;
    if (actx) {
        out = actx.destination;
    }

    const playScale = (index: number) => {
        if (!actx || !index) return

        const time = actx.currentTime;
        const osc = actx.createOscillator();
        const gainNode = actx.createGain();

        osc.frequency.value = MINOR_SCALE[index - 1];
        osc.type = 'triangle'

        gainNode.gain.value = 0.7
        gainNode.gain.exponentialRampToValueAtTime(0.2, time + 0.5)

        osc.connect(gainNode);
        gainNode.connect(out);

        osc.start()
        osc.stop(time + 0.5)
    }

    const winSound = () => {
        if (!actx) return

        const time = actx.currentTime;
        const osc = actx.createOscillator();
        const gainNode = actx.createGain();

        const beat = 0.4;
        const sixteenth =  beat / 4;

        osc.frequency.value = C;
        osc.frequency.setValueAtTime(E, time + (sixteenth * 2));
        osc.frequency.setValueAtTime(G, time + (sixteenth * 3));
        osc.frequency.setValueAtTime(C * 2, time + beat);
        gainNode.gain.value = 0.7

        osc.connect(gainNode);
        gainNode.connect(out);       

        osc.start()
        osc.stop(time + (beat * 2))
    }

    const loseSound = () => {
        if (!actx) return

        const time = actx.currentTime;

        const bass = actx.createOscillator();
        bass.frequency.value = C;
        bass.type = 'sawtooth';
        const tenor = actx.createOscillator();
        tenor.frequency.value = Eb;    
        tenor.type = 'sawtooth';
        const alto = actx.createOscillator();
        alto.frequency.value = G;
        alto.type = 'sawtooth';
        const soprano = actx.createOscillator();
        soprano.frequency.value = C * 2;     
        soprano.type = 'sawtooth';

        const bassGain = actx.createGain();
        bassGain.gain.value = 0.2;
        const tenorGain = actx.createGain();
        tenorGain.gain.value = 0.2;
        const altoGain = actx.createGain();
        altoGain.gain.value = 0.2;
        const sopranoGain = actx.createGain();
        sopranoGain.gain.value = 0.2;

        const merger = actx.createChannelMerger(4);

        bass.connect(bassGain);
        bassGain.connect(merger, 0, 0);
        tenor.connect(tenorGain);
        tenorGain.connect(merger, 0, 1);
        alto.connect(tenorGain);
        altoGain.connect(merger, 0, 2);
        soprano.connect(tenorGain);
        sopranoGain.connect(merger, 0, 3);      
        merger.connect(out);

        bass.start()
        tenor.start()
        alto.start()
        soprano.start()

        bass.stop(time + 2)
        tenor.stop(time + 2)
        alto.stop(time + 2)
        soprano.stop(time + 2)
    }

    useEffect(() => {
        setActx(new AudioContext())
    }, [])

    return (
        <SoundContext.Provider value={{ playScale, winSound, loseSound }}>
            {children}
        </SoundContext.Provider>
    )
}

export { SoundContext, SoundProvider }