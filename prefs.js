const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Gio = imports.gi.Gio;

let settings;

function init() {
	settings = ExtensionUtils.getSettings('org.gnome.shell.extensions.GPU_profile_selector');
	ExtensionUtils.initTranslations("GPU_profile_selector");
}

function buildPrefsWidget () {
  let buildable = new Gtk.Builder();
	buildable.add_from_file( Me.dir.get_path() + '/prefs.xml' );

  let box = buildable.get_object('prefs_widget');
  settings.bind('rtd3' , buildable.get_object('field_rtd3') , 'active' , Gio.SettingsBindFlags.DEFAULT);
  settings.bind('force-composition-pipeline' , buildable.get_object('field_force_composition_pipeline') , 'active' , Gio.SettingsBindFlags.DEFAULT);
  settings.bind('coolbits' , buildable.get_object('field_coolbits') , 'active' , Gio.SettingsBindFlags.DEFAULT);

  return box;
};