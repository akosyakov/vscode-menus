import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    for (const command of [
        'extension.explorer.context.navigation',
        'extension.explorer.context.2_workspace',
        'extension.explorer.context.3_compare',
        'extension.explorer.context.4_search',
        'extension.explorer.context.5_cutcopypaste',
        'extension.explorer.context.7_modification',
        'extension.editor.context.navigation',
        'extension.editor.context.1_modification',
        'extension.editor.context.9_cutcopypaste',
        'extension.editor.context.z_commands',
        'extension.editor.title.1_diff',
        'extension.editor.title.3_open',
        'extension.editor.title.5_close',
        'extension.debug.callstack.context',
        'extension.debug.callstack.context.session', // arg should be undefined
        'extension.debug.callstack.context.thread', // arg should be thread id
        'extension.debug.callstack.context.stackFrame', // arg should be path or Uri
        'extension.debug.callstack.context.all' // several menus for the same command
    ]) {
        context.subscriptions.push(
            vscode.commands.registerCommand(command, (arg: any) =>
                vscode.window.showInformationMessage('Selected resource: ' + arg)
            )
        );
    }
}

export function deactivate() { }
