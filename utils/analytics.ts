export const NAMESPACE = 'mrmystery_analytics_live_2026';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const trackEvent = async (eventName: string) => {
    try {
        await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${eventName}/up`);
    } catch (error) {
        console.error('Failed to track event', error);
    }
}

export const getEventCount = async (eventName: string) => {
    try {
        const res = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${eventName}`);
        if (!res.ok) return 0;
        const data = await res.json();
        return data.count || 0;
    } catch (error) {
        return 0;
    }
}
