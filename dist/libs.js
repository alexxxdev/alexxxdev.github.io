var libs = [
  {
    name: "My list of best",
    list: [
      {
        name: "Kotlin",
        url: "http://kotlinlang.org/",
        github: "https://github.com/JetBrains/kotlin",
        desc: "The Kotlin Programming Language",
        usage: "https://kotlinlang.org/docs/reference/using-gradle.html",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/org.jetbrains.kotlin:kotlin-stdlib/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/org.jetbrains.kotlin:kotlin-stdlib/images/download.svg"
      },
      {
        name: "Gradle",
        url: "https://gradle.org/",
        github: "https://github.com/gradle/gradle",
        desc: "A powerful build system for the JVM",
        usage: "https://gradle.org/getting-started-android-build/",
        bintray_latest_version: "https://bintray.com/seu-as-code/maven/gradle/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/seu-as-code/maven/gradle/images/download.svg"
      },
      {
        name: "gradle-versions-plugin",
        github: "https://github.com/ben-manes/gradle-versions-plugin",
        desc: "Gradle plugin to discover dependency updates",
        usage: "https://github.com/ben-manes/gradle-versions-plugin/blob/master/README.md",
        bintray_latest_version: "https://bintray.com/fooberger/maven/com.github.ben-manes:gradle-versions-plugin/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/fooberger/maven/com.github.ben-manes:gradle-versions-plugin/images/download.svg"
      },
      {
        name: "Retrofit",
        url: "http://square.github.io/retrofit/",
        github: "https://github.com/square/retrofit",
        desc: "Type-safe HTTP client for Android and Java by Square, Inc.",
        gradle: "compile 'com.squareup.retrofit2:retrofit:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.retrofit2:retrofit/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.retrofit2:retrofit/images/download.svg"
      },
      {
        name: "LoganSquare",
        github: "https://github.com/bluelinelabs/LoganSquare",
        desc: "Screaming fast JSON parsing and serialization library for Android",
        gradle: "buildscript {\n\trepositories {\n\t\tjcenter()\n\t}\n\tdependencies {\n\t\tclasspath 'com.neenbedankt.gradle.plugins:android-apt:1.8'\n\t}\n}\napply plugin: 'com.neenbedankt.android-apt'\ndependencies {\n\tapt 'com.bluelinelabs:logansquare-compiler:<version>'\n\tcompile 'com.bluelinelabs:logansquare:<version>'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bluelinelabs/bluelinelabs/LoganSquare/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bluelinelabs/bluelinelabs/LoganSquare/images/download.svg"
      },
      {
        name: "retrofit-logansquare",
        github: "https://github.com/aurae/retrofit-logansquare",
        desc: "A Converter implementation using BlueLine Labs' LoganSquare JSON serialization for Square's Retrofit REST library",
        gradle: "apt 'com.bluelinelabs:logansquare-compiler:<version>'\ncompile 'com.bluelinelabs:logansquare:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/aurae/maven/retrofit2-logansquare/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/aurae/maven/retrofit2-logansquare/images/download.svg"
      },
      {
        name: "RxJava",
        github: "https://github.com/ReactiveX/RxJava",
        desc: "RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM",
        gradle: "compile 'io.reactivex:rxjava:x.y.z'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/reactivex/RxJava/RxJava/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/reactivex/RxJava/RxJava/images/download.svg"
      },
      {
        name: "RxAndroid",
        github: "https://github.com/ReactiveX/RxAndroid",
        desc: "RxJava bindings for Android",
        gradle: "compile 'io.reactivex:rxandroid:x.y.z'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/reactivex/RxJava/RxAndroid/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/reactivex/RxJava/RxAndroid/images/download.svg"
      },
      {
        name: "RxBinding/RxBinding-Kotlin",
        github: "https://github.com/JakeWharton/RxBinding",
        desc: "RxJava binding APIs for Android's UI widgets",
        usage: "https://github.com/JakeWharton/RxBinding/blob/master/README.md",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.jakewharton.rxbinding:rxbinding/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.jakewharton.rxbinding:rxbinding/images/download.svg"
      },
      {
        name: "Realm",
        url: "http://realm.io",
        github: "https://github.com/realm/realm-java",
        desc: "Realm is a mobile database: a replacement for SQLite & ORMs",
        gradle: "buildscript {\n\trepositories {\n\t\tjcenter()\n\t}\n\tdependencies {\n\t\tclasspath 'io.realm:realm-gradle-plugin:<version>'\n\t}\n}\napply plugin: 'realm-android'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/realm/maven/realm-gradle-plugin/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/realm/maven/realm-gradle-plugin/images/download.svg"
      },
      {
        name: "Dagger 2",
        url: "http://google.github.io/dagger/",
        github: "https://github.com/google/dagger",
        desc: "A fast dependency injector for Android and Java",
        gradle: "buildscript {\n\trepositories {\n\t\tmavenCentral()\n\t}\n\tdependencies {\n\t\tclasspath 'com.neenbedankt.gradle.plugins:android-apt:1.8'\n\t}\n}\n\n// Apply plugin\napply plugin: 'com.neenbedankt.android-apt'\n\n// Add Dagger dependencies\ndependencies {\n\tcompile 'com.google.dagger:dagger:2.x'\n\tapt 'com.google.dagger:dagger-compiler:2.x'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.google.dagger:dagger/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.google.dagger:dagger/images/download.svg"
      },
      {
        name: "kotterknife",
        github: "https://github.com/JakeWharton/kotterknife",
        desc: "View \"injection\" library for Android",
        gradle: "compile 'com.jakewharton:kotterknife:0.1.0-SNAPSHOT'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "Glide",
        github: "https://github.com/bumptech/glide",
        desc: "An image loading and caching library for Android focused on smooth scrolling",
        gradle: "compile 'com.github.bumptech.glide:glide:<version>'",
        license: "License",
        license_url: "https://github.com/bumptech/glide/blob/master/LICENSE",
        bintray_latest_version: "https://bintray.com/sam-a-judd/maven/com.github.bumptech.glide:glide/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/sam-a-judd/maven/com.github.bumptech.glide:glide/images/download.svg"
      },
      {
        name: "EventBus",
        github: "https://github.com/greenrobot/EventBus",
        desc: "Android optimized event bus that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality",
        gradle: "compile 'org.greenrobot:eventbus:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/org.greenrobot:eventbus/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/org.greenrobot:eventbus/images/download.svg"
      }
    ]
  },
  {
    name: "Networking",
    list: [
      {
        name: "Retrofit",
        url: "http://square.github.io/retrofit/",
        github: "https://github.com/square/retrofit",
        desc: "Type-safe HTTP client for Android and Java by Square, Inc.",
        gradle: "compile 'com.squareup.retrofit2:retrofit:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.retrofit2:retrofit/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.retrofit2:retrofit/images/download.svg"
      },
      {
        name: "okhttp",
        url: "http://square.github.io/okhttp/",
        github: "https://github.com/square/okhttp",
        desc: "An HTTP+HTTP/2 client for Android and Java applications",
        gradle: "compile 'com.squareup.okhttp3:okhttp:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.okhttp3:okhttp/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.okhttp3:okhttp/images/download.svg"
      },
      {
        name: "AndroidAsync",
        github: "https://github.com/koush/AndroidAsync",
        desc: "Asynchronous socket, http (client+server), websocket, and socket.io library for android. Based on nio, not threads",
        gradle: "compile 'com.koushikdutta.async:androidasync:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.koushikdutta.async:androidasync/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.koushikdutta.async:androidasync/images/download.svg"
      }
    ]
  },
  {
    name: "Image Loader",
    list: [
      {
        name: "Glide",
        github: "https://github.com/bumptech/glide",
        desc: "An image loading and caching library for Android focused on smooth scrolling",
        gradle: "compile 'com.github.bumptech.glide:glide:<version>'",
        license: "License",
        license_url: "https://github.com/bumptech/glide/blob/master/LICENSE",
        bintray_latest_version: "https://bintray.com/sam-a-judd/maven/com.github.bumptech.glide:glide/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/sam-a-judd/maven/com.github.bumptech.glide:glide/images/download.svg"
      },
      {
        name: "Picasso",
        url: "http://square.github.io/picasso/",
        github: "https://github.com/square/picasso",
        desc: "A powerful image downloading and caching library for Android",
        gradle: "compile 'com.squareup.picasso:picasso:<version>'",
        license: "License",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.picasso:picasso/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.picasso:picasso/images/download.svg"
      },
      {
        name: "Universal Image Loader",
        url: "https://github.com/nostra13/Android-Universal-Image-Loader",
        github: "https://github.com/square/picasso",
        desc: "Powerful and flexible library for loading, caching and displaying images on Android",
        gradle: "compile 'com.nostra13.universalimageloader:universal-image-loader:<version>'",
        license: "License",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.nostra13.universalimageloader:universal-image-loader/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.nostra13.universalimageloader:universal-image-loader/images/download.svg"
      },
      {
        name: "Fresco",
        url: "http://frescolib.org/",
        github: "https://github.com/facebook/fresco",
        desc: "An Android library for managing images and the memory they use",
        gradle: "compile 'com.facebook.fresco:fresco:<version>'",
        license: "BSD License",
        license_url: "https://github.com/facebook/fresco/blob/master/LICENSE",
        bintray_latest_version: "https://bintray.com/facebook/maven/com.facebook.fresco:fresco/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/facebook/maven/com.facebook.fresco:fresco/images/download.svg"
      },
      {
        name: "Ion",
        github: "https://github.com/koush/ion",
        desc: "Android Asynchronous Networking and Image Loading",
        gradle: "compile 'com.koushikdutta.ion:ion:<version>'",
        license: "License",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.koushikdutta.ion:ion/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.koushikdutta.ion:ion/images/download.svg"
      }
    ]
  },
  {
    name: "Functional programming",
    list: [
      {
        name: "Retrolambda",
        github: "https://github.com/orfjackal/retrolambda",
        desc: "Backport of Java 8's lambda expressions to Java 7, 6 and 5",
        usage: "https://github.com/orfjackal/retrolambda",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/me.tatarka:gradle-retrolambda/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/me.tatarka:gradle-retrolambda/images/download.svg"
      }
    ]
  },
  {
    name: "Functional reactive programming",
    list: [
      {
        name: "RxJava",
        github: "https://github.com/ReactiveX/RxJava",
        desc: "RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM",
        gradle: "compile 'io.reactivex:rxjava:x.y.z'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/reactivex/RxJava/RxJava/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/reactivex/RxJava/RxJava/images/download.svg"
      },
      {
        name: "RxAndroid",
        github: "https://github.com/ReactiveX/RxAndroid",
        desc: "RxJava bindings for Android",
        gradle: "compile 'io.reactivex:rxandroid:x.y.z'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/reactivex/RxJava/RxAndroid/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/reactivex/RxJava/RxAndroid/images/download.svg"
      },
      {
        name: "RxBinding/RxBinding-Kotlin",
        github: "https://github.com/JakeWharton/RxBinding",
        desc: "RxJava binding APIs for Android's UI widgets",
        usage: "https://github.com/JakeWharton/RxBinding/blob/master/README.md",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.jakewharton.rxbinding:rxbinding/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.jakewharton.rxbinding:rxbinding/images/download.svg"
      },
      {
        name: "Agera",
        github: "https://github.com/google/agera",
        desc: "Reactive Programming for Android",
        gradle: "compile 'com.google.android.agera:agera:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/ernstsson/Agera/agera/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/ernstsson/Agera/agera/images/download.svg"
      }
    ]
  },
  {
    name: "Dependency Injections",
    list: [
      {
        name: "Dagger",
        url: "http://square.github.io/dagger/",
        github: "https://github.com/square/dagger",
        desc: "A fast dependency injector for Android and Java",
        gradle: "compile 'com.squareup.dagger:dagger:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.dagger:dagger/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.dagger:dagger/images/download.svg"
      },
      {
        name: "Dagger 2",
        url: "http://google.github.io/dagger/",
        github: "https://github.com/google/dagger",
        desc: "A fast dependency injector for Android and Java",
        gradle: "buildscript {\n\trepositories {\n\t\tmavenCentral()\n\t}\n\tdependencies {\n\t\tclasspath 'com.neenbedankt.gradle.plugins:android-apt:1.8'\n\t}\n}\n\n// Apply plugin\napply plugin: 'com.neenbedankt.android-apt'\n\n// Add Dagger dependencies\ndependencies {\n\tcompile 'com.google.dagger:dagger:2.x'\n\tapt 'com.google.dagger:dagger-compiler:2.x'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.google.dagger:dagger/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.google.dagger:dagger/images/download.svg"
      },
      {
        name: "Butter Knife",
        url: "http://jakewharton.github.io/butterknife/",
        github: "https://github.com/JakeWharton/butterknife",
        desc: "Bind Android views and callbacks to fields and methods",
        gradle: "buildscript {\n\trepositories {\n\t\tmavenCentral()\n\t }\n\tdependencies {\n\t\tclasspath 'com.neenbedankt.gradle.plugins:android-apt:1.8'\n\t}\n}\n\napply plugin: 'android-apt'\n\ndependencies {\n\tcompile 'com.jakewharton:butterknife:<version>'\n\tapt 'com.jakewharton:butterknife-compiler:<version>'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.jakewharton:butterknife/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.jakewharton:butterknife/images/download.svg"
      },
      {
        name: "kotterknife",
        github: "https://github.com/JakeWharton/kotterknife",
        desc: "View \"injection\" library for Android",
        gradle: "compile 'com.jakewharton:kotterknife:0.1.0-SNAPSHOT'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "AndroidAnnotations",
        url: "http://androidannotations.org/",
        github: "https://github.com/excilys/androidannotations",
        desc: "Fast Android Development. Easy maintainance",
        usage: "https://github.com/excilys/androidannotations/wiki/Configuration",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/org.androidannotations:androidannotations/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/org.androidannotations:androidannotations/images/download.svg"
      },
      {
        name: "Tiger",
        github: "https://github.com/google/tiger",
        desc: "Tiger - The fastest java dependency injection framework",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      }
    ]
  },
  {
    name: "JSON",
    list: [
      {
        name: "gson",
        github: "https://github.com/google/gson",
        desc: "A Java serialization/deserialization library that can convert Java Objects into JSON and back",
        gradle: "compile 'com.google.code.gson:gson:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.google.code.gson:gson/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.google.code.gson:gson/images/download.svg"
      },
      {
        name: "LoganSquare",
        github: "https://github.com/bluelinelabs/LoganSquare",
        desc: "Screaming fast JSON parsing and serialization library for Android",
        gradle: "buildscript {\nrepositories {\njcenter()\n}\ndependencies {\nclasspath 'com.neenbedankt.gradle.plugins:android-apt:1.8'\n}\n}\napply plugin: 'com.neenbedankt.android-apt'\ndependencies {\napt 'com.bluelinelabs:logansquare-compiler:<version>'\ncompile 'com.bluelinelabs:logansquare:<version>'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bluelinelabs/bluelinelabs/LoganSquare/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bluelinelabs/bluelinelabs/LoganSquare/images/download.svg"
      },
      {
        name: "Jackson",
        github: "https://github.com/FasterXML/jackson",
        desc: "A Java serialization/deserialization library that can convert Java Objects into JSON and back",
        usage: "https://github.com/FasterXML/jackson",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      }
    ]
  },
  {
    name: "Database",
    list: [
      {
        name: "Realm",
        url: "http://realm.io",
        github: "https://github.com/realm/realm-java",
        desc: "Realm is a mobile database: a replacement for SQLite & ORMs",
        gradle: "buildscript {\n\trepositories {\n\t\tjcenter()\n\t}\n\tdependencies {\n\t\tclasspath 'io.realm:realm-gradle-plugin:<version>'\n\t}\n}\napply plugin: 'realm-android'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/realm/maven/realm-gradle-plugin/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/realm/maven/realm-gradle-plugin/images/download.svg"
      },
      {
        name: "SQLBrite",
        github: "https://github.com/square/sqlbrite",
        desc: "A lightweight wrapper around SQLiteOpenHelper which introduces reactive stream semantics to SQL operations",
        gradle: "compile 'com.squareup.sqlbrite:sqlbrite:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.squareup.sqlbrite:sqlbrite/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.squareup.sqlbrite:sqlbrite/images/download.svg"
      },
      {
        name: "StorIO",
        github: "https://github.com/pushtorefresh/storio",
        desc: "Beautiful API for SQLiteDatabase and ContentResolver",
        gradle: "compile 'com.pushtorefresh.storio:sqlite:1.10.0'\n\n// If you need StorIO for ContentResolver\ncompile 'com.pushtorefresh.storio:content-resolver:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.pushtorefresh.storio:sqlite/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.pushtorefresh.storio:sqlite/images/download.svg"
      }
    ]
  },
  {
    name: "Pub/Sub",
    list: [
      {
        name: "EventBus",
        github: "https://github.com/greenrobot/EventBus",
        desc: "Android optimized event bus that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality",
        gradle: "compile 'org.greenrobot:eventbus:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/org.greenrobot:eventbus/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/org.greenrobot:eventbus/images/download.svg"
      }
    ]
  },
  {
    name: "Google Play Services",
    list: [
      {
        usage: "https://developers.google.com/android/guides/setup",
        gradle: "apply plugin: 'com.android.application'\n\t...\n\n\tdependencies {\n\t\timplementation 'com.google.android.gms:play-services:<version>'\n\t}\n\n",
        list: [
          {
            name: "Google+",
            gradle: "com.google.android.gms:play-services-plus:<version>"
          },
          {
            name: "Google Account Login",
            gradle: "com.google.android.gms:play-services-auth:<version>"
          },
          {
            name: "Google Actions, Base Client Library",
            gradle: "com.google.android.gms:play-services-base:<version>"
          },
          {
            name: "Google Sign In",
            gradle: "com.google.android.gms:play-services-identity:<version>"
          },
          {
            name: "Google Analytics",
            gradle: "com.google.android.gms:play-services-analytics:<version>"
          },
          {
            name: "Google Awareness",
            gradle: "com.google.android.gms:play-services-contextmanager:<version>"
          },
          {
            name: "Google Cast",
            gradle: "com.google.android.gms:play-services-cast:<version>"
          },
          {
            name: "Google Cloud Messaging",
            gradle: "com.google.android.gms:play-services-gcm:<version>"
          },
          {
            name: "Google Drive",
            gradle: "com.google.android.gms:play-services-drive:<version>"
          },
          {
            name: "Google Fit",
            gradle: "com.google.android.gms:play-services-fitness:<version>"
          },
          {
            name: "Google Location and Activity Recognition",
            gradle: "com.google.android.gms:play-services-location:<version>"
          },
          {
            name: "Google Maps",
            gradle: "com.google.android.gms:play-services-maps:<version>"
          },
          {
            name: "Google Mobile Ads",
            gradle: "com.google.android.gms:play-services-ads:<version>"
          },
          {
            name: "Google Places",
            gradle: "com.google.android.gms:play-services-places:<version>"
          },
          {
            name: "Mobile Vision",
            gradle: "com.google.android.gms:play-services-vision:<version>"
          },
          {
            name: "Google Nearby",
            gradle: "com.google.android.gms:play-services-nearby:<version>"
          },
          {
            name: "Google Panorama Viewer",
            gradle: "com.google.android.gms:play-services-panorama:<version>"
          },
          {
            name: "Google Play Game services",
            gradle: "com.google.android.gms:play-services-games:<version>"
          },
          {
            name: "SafetyNet",
            gradle: "com.google.android.gms:play-services-safetynet:<version>"
          },
          {
            name: "Android Pay",
            gradle: "com.google.android.gms:play-services-wallet:<version>"
          },
          {
            name: "Android Wear",
            gradle: "com.google.android.gms:play-services-wearable:<version>"
          }
        ]
      }
    ]
  },
  {
    name: "Support Librareis",
    list: [
      {
        name: "Multidex Support Library",
        desc: "This library provides support for building apps with multiple Dalvik Executable (DEX) files. Apps that reference more than 65536 methods are required to use multidex configurations",
        gradle: "compile 'com.android.support:multidex:1.0.0'"
      },
      {
        name: "v4",
        list2: [
          {
            name: "compat library",
            desc: "Provides compatibility wrappers for a number of framework APIs",
            gradle: "compile 'com.android.support:support-compat:24.2.0'"
          },
          {
            name: "core-utils library",
            desc: "Provides a number of utility classes",
            gradle: "compile 'com.android.support:support-core-utils:24.2.0'"
          },
          {
            name: "core-ui library",
            desc: "Implements a variety of UI-related components",
            gradle: "compile 'com.android.support:support-core-ui:24.2.0'"
          },
          {
            name: "media-compat library",
            desc: "Backports portions of the media framework, including MediaBrowser and MediaSession",
            gradle: "compile 'com.android.support:support-media-compat:24.2.0'"
          },
          {
            name: "fragment library",
            desc: "Adds support for encapsulation of user interface and functionality with fragments, enabling applications to provide layouts that adjust between small and large-screen devices. This module has dependencies on compat, core-utils, core-ui, and media-compat.",
            gradle: "compile 'com.android.support:support-fragment:24.2.0'"
          }
        ]
      },
      {
        name: "v7",
        list2: [
          {
            name: "appcompat library",
            desc: "This library adds support for the Action Bar user interface design pattern. This library includes support for material design user interface implementations.",
            gradle: "compile 'com.android.support:appcompat-v7:24.2.0'"
          },
          {
            name: "cardview library",
            desc: "This library adds support for the CardView widget, which lets you show information inside cards that have a consistent look on any app. These cards are useful for material design implementations, and are used extensively in layouts for TV apps.",
            gradle: "compile 'com.android.support:cardview-v7:24.2.0'"
          },
          {
            name: "gridlayout library",
            desc: "After you download the Android Support Libraries, this library adds support for the GridLayout class, which allows you to arrange user interface elements using a grid of rectangular cells. For detailed information about the v7 gridlayout library APIs, see the android.support.v7.widget package in the API reference.",
            gradle: "compile 'com.android.support:gridlayout-v7:24.2.0'"
          },
          {
            name: "mediarouter library",
            desc: "This library provides MediaRouter, MediaRouteProvider, and related media classes that support Google Cast.",
            gradle: "compile 'com.android.support:mediarouter-v7:24.2.0'"
          },
          {
            name: "palette library",
            desc: "The v7 palette support library includes the Palette class, which lets you extract prominent colors from an image.",
            gradle: "compile 'com.android.support:palette-v7:24.2.0'"
          },
          {
            name: "recyclerview library",
            desc: "The recyclerview library adds the RecyclerView class. This class provides support for the RecyclerView widget, a view for efficiently displaying large data sets by providing a limited window of data items.",
            gradle: "compile 'com.android.support:recyclerview-v7:24.2.0'"
          },
          {
            name: "Preference Support Library",
            desc: "The preference package provides APIs to support adding preference objects, such as CheckBoxPreference and ListPreference, for users to modify UI settings.",
            gradle: "compile 'com.android.support:preference-v7:24.2.0'"
          }
        ]
      },
      {
        name: "v13 Support Library",
        desc: "This library is designed to be used for Android 3.2 (API level 13) and higher. It adds support for the Fragment user interface pattern with the (FragmentCompat) class and additional fragment support classes. For more information about fragments, see the Fragments developer guide. For detailed information about the v13 Support Library APIs, see the android.support.v13 package in the API reference.",
        gradle: "compile 'com.android.support:support-v13:24.2.0'"
      },
      {
        name: "v14 Preference Support Library",
        desc: "The android.support.v14.preference package provides APIs to add support for preference interfaces such as PreferenceFragment.OnPreferenceStartFragmentCallback and PreferenceFragment.OnPreferenceStartScreenCallback, along with classes, such as MultiSelectListPreference and PreferenceFragment. For detailed information about the v14 Preference Support Library APIs, see the preference package in the API reference.",
        gradle: "compile 'com.android.support:preference-v14:24.2.0'"
      },
      {
        name: "v17",
        list2: [
          {
            name: "Preference Support Library for TV",
            desc: "The android.support.v17.preference package provides APIs for providing preference interfaces on TV devices, including support for the LeanbackListPreferenceDialogFragment.ViewHolder.OnItemClickListener interface and classes, such as BaseLeanbackPreferenceFragment and LeanbackPreferenceFragment. For detailed information about the v17 Preference Support Library APIs, see the preference package in the API reference.",
            gradle: "compile 'com.android.support:preference-leanback-v17:24.2.0'"
          },
          {
            name: "Leanback Library",
            desc: "The android.support.v17.leanback package provides APIs to support building user interfaces on TV devices. It provides a number of important widgets for TV apps",
            gradle: "compile 'com.android.support:leanback-v17:24.2.0'"
          }
        ]
      },
      {
        name: "Annotations Support Library",
        desc: "The Annotation package provides APIs to support adding annotation metadata to your apps.",
        gradle: "compile 'com.android.support:support-annotations:24.2.0'"
      },
      {
        name: "Design Support Library",
        desc: "The Design package provides APIs to support adding material design components and patterns to your apps.",
        gradle: "compile 'com.android.support:design:24.2.0'"
      },
      {
        name: "Custom Tabs Support Library",
        desc: "The Custom Tabs package provides APIs to support adding and managing custom tabs in your apps.",
        gradle: "compile 'com.android.support:customtabs:24.2.0'"
      },
      {
        name: "Percent Support Library",
        desc: "The Percent package provides APIs to support adding and managing percentage based dimensions in your app.",
        gradle: "compile 'com.android.support:percent:24.2.0'"
      },
      {
        name: "App Recommendation Support Library for TV",
        desc: "The App Recommendation package provides APIs to support adding content recommendations in your app running on TV devices.",
        gradle: "compile 'com.android.support:recommendation:24.2.0'"
      }
    ]
  },
  {
    name: "Graphics",
    list: [
      {
        name: "MPAndroidChart",
        github: "https://github.com/PhilJay/MPAndroidChart",
        desc: "A powerful Android chart view / graph view library, supporting line- bar- pie- radar- bubble- and candlestick charts as well as scaling, dragging and animations.",
        gradle: "allprojects {\n\trepositories {\n\t\tmaven { url \"https://jitpack.io\" }\n\t}\n}\n\ndependencies {\n\tcompile 'com.github.PhilJay:MPAndroidChart:v3.0.0-beta1'\n}",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "Materialdrawer",
        url: "http://mikepenz.github.io/MaterialDrawer/",
        github: "https://github.com/mikepenz/MaterialDrawer",
        desc: "The flexible, easy to use, all in one drawer library for your Android project",
        gradle: "compile 'com.mikepenz:materialdrawer:5.6.0@aar'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.mikepenz:materialdrawer/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.mikepenz:materialdrawer/images/download.svg"
      },
      {
        name: "AndroidSlidingUpPanel",
        github: "https://github.com/umano/AndroidSlidingUpPanel",
        desc: "This library provides a simple way to add a draggable sliding up panel (popularized by Google Music and Google Maps) to your Android application",
        gradle: "compile 'com.sothree.slidinguppanel:library:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.sothree.slidinguppanel:library/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.sothree.slidinguppanel:library/images/download.svg"
      },
      {
        name: "FlexboxLayout",
        github: "https://github.com/google/flexbox-layout",
        desc: "Flexbox for Android",
        gradle: "compile 'com.google.android:flexbox:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/google/flexbox-layout/flexbox/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/google/flexbox-layout/flexbox/images/download.svg"
      },
      {
        name: "AppIntro",
        github: "https://github.com/PaoloRotolo/AppIntro",
        desc: "Make a cool intro for your Android app.",
        gradle: "compile 'com.github.paolorotolo:appintro::<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/rotolopao/maven/com.github.paolorotolo:appintro/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/rotolopao/maven/com.github.paolorotolo:appintro/images/download.svg"
      },
      {
        name: "Space-Navigation-View",
        github: "https://github.com/armcha/Space-Navigation-View",
        desc: "Space Navigation is a library allowing easily integrate fully customizable Google Spaces like navigation to your app",
        gradle: "compile 'com.github.armcha:SpaceNavigationView:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/armcha/maven/SpaceNavigationView/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/armcha/maven/SpaceNavigationView/images/download.svg"
      },
      {
        name: "SpeedView",
        github: "https://github.com/anastr/SpeedView",
        desc: "Dynamic Speedometer for Android. amazing, powerful, and multi shape :zap: , you can change the color of everything",
        gradle: "compile 'com.github.anastr:speedviewlib:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/anastr/maven/SpeedView/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/anastr/maven/SpeedView/images/download.svg"
      },
      {
        name: "SlidingTutorial",
        github: "https://github.com/Cleveroad/SlidingTutorial-Android",
        desc: "Sliding Tutorial Library for Android",
        gradle: "compile 'com.cleveroad:slidingtutorial:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.cleveroad:slidingtutorial/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.cleveroad:slidingtutorial/images/download.svg"
      },
      {
        name: "Coverflow",
        github: "https://github.com/moondroid/CoverFlow",
        desc: "Android CoverFlow widget",
        gradle: "compile 'com.github.moondroid.coverflow:library:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.github.moondroid.coverflow:library/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.github.moondroid.coverflow:library/images/download.svg"
      },
      {
        name: "folding-cell-android",
        github: "https://github.com/Ramotion/folding-cell-android",
        desc: "FoldingCell is an expanding content cell inspired by folding paper material https://business.ramotion.com/gthb-casestudies",
        gradle: "compile 'com.ramotion.foldingcell:folding-cell:<version>'",
        license: "MIT",
        license_url: "https://github.com/Ramotion/folding-cell-android/blob/master/LICENSE.md",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/com.ramotion.foldingcell:folding-cell/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/com.ramotion.foldingcell:folding-cell/images/download.svg"
      }
    ]
  },
  {
    name: "Dialogs",
    list: [
      {
        name: "material-dialogs",
        github: "https://github.com/afollestad/material-dialogs",
        desc: "A beautiful, fluid, and customizable dialogs API",
        gradle: "compile 'com.afollestad.material-dialogs:core:<version>'\ncompile 'com.afollestad.material-dialogs:commons:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/drummer-aidan/maven/material-dialogs:core/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/drummer-aidan/maven/material-dialogs:core/images/download.svg"
      }
    ]
  },
  {
    name: "Other",
    list: [
      {
        name: "joda-time-android",
        github: "https://github.com/dlew/joda-time-android",
        desc: "Joda-Time library with Android specialization",
        gradle: "compile 'net.danlew:android.joda:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/bintray/jcenter/net.danlew:android.joda/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/bintray/jcenter/net.danlew:android.joda/images/download.svg"
      },
      {
        name: "Calligraphy",
        github: "https://github.com/chrisjenx/Calligraphy",
        desc: "Custom fonts in Android an OK way.",
        gradle: "compile 'uk.co.chrisjenx:calligraphy:<version>'",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        bintray_latest_version: "https://bintray.com/chrisjenx/maven/uk.co.chrisjenx:calligraphy/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/chrisjenx/maven/uk.co.chrisjenx:calligraphy/images/download.svg"
      }
    ]
  },
  {
    name: "Tools",
    list: [
      {
        name: "leakcanary",
        github: "https://github.com/square/leakcanary",
        desc: "A memory leak detection library for Android and Java.",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        gradle: "compile 'com.squareup.leakcanary:leakcanary-android:1.4'"
      }
    ]
  },
  {
    name: "Testing",
    list: [
      {
        name: "MockK",
        url: "http://mockk.io/",
        github: "https://github.com/oleksiyp/mockk",
        desc: "mocking library for Kotlin",
        usage: "https://github.com/oleksiyp/mockk",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        gradle: "testCompile 'io.mockk:mockk:1.7.13'",
        bintray_latest_version: "http://search.maven.org/#search%7Cga%7C1%7Cmockk",
        bintray_img_version: "https://img.shields.io/maven-central/v/io.mockk/mockk.svg?label=release"
      },
      {
        name: "Kakao",
        github: "https://github.com/agoda-com/Kakao",
        desc: "Nice and simple DSL for Espresso in Kotlin",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0",
        gradle: "repositories {\n\t\tjcenter()\n\t}\ndependencies {\n\t// For Gradle Version below 3.0.0\n\tandroidTestCompile 'com.agoda.kakao:kakao:<version>'\n\t// For Gradle Version 3.0.0 or above\n\tandroidTestImplementation 'com.agoda.kakao:kakao:<version>'\n}",
        bintray_latest_version: "https://bintray.com/agoda/maven/kakao/_latestVersion",
        bintray_img_version: "https://api.bintray.com/packages/agoda/maven/kakao/images/download.svg"
      }
    ]
  },
  {
    name: "Interesting projects",
    list: [
      {
        name: "Material design icons",
        url: "http://google.github.io/material-design-icons/",
        github: "https://github.com/google/material-design-icons",
        desc: "Material design icons are the official icon set from Google that are designed under the material design guidelines.",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "iosched",
        url: "https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched",
        github: "https://github.com/google/iosched",
        desc: "The Google I/O Android App",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "UniversalMusicPlayer",
        github: "https://github.com/googlesamples/android-UniversalMusicPlayer",
        desc: "This sample shows how to implement an audio media app that works across multiple form factors and provide a consistent user experience on Android phones, tablets, Auto, Wear and Cast devices",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "Telegram",
        github: "https://github.com/DrKLO/Telegram",
        desc: "Telegram for Android source",
        license: "Apache License V2",
        license_url: "https://www.apache.org/licenses/LICENSE-2.0"
      },
      {
        name: "Quill",
        github: "https://github.com/vickychijwani/quill",
        desc: "Quill is the beautiful Android app for your Ghost blog",
        license: "MIT",
        license_url: "https://github.com/vickychijwani/quill/blob/master/LICENSE"
      },
      {
        name: "Notelin",
        github: "https://github.com/ImangazalievM/Notelin",
        desc: "Note-taking app for Android written in Kotlin"
      }
    ]
  }
]


