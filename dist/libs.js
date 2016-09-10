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
          gradle: "com.squareup.dagger:dagger:<version>'",
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
        }
      ]
    }
  ]


