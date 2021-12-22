export const APIResponse = (
    res: any = null,
    code: any = 200,
    data: any = {},
    message: any = '',
    version: any = 'version 1',
    input_correct: any = true,
) => {
    if (!res) return null;

    return res.status(code).json({
        data,
        code,
        message,
        version,
        input_correct,
    });
};
